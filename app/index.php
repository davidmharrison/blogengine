<?php
	session_start();
	date_default_timezone_set('Europe/London');
	error_reporting(E_ALL);

	require '../vendor/autoload.php';

	$dotenv = new Dotenv\Dotenv(__DIR__);
	$dotenv->load();

	DB::$user = getenv('DB_USERNAME');
	// DB::$password = 'TshOpwoB';
	DB::$password = getenv('DB_PASSWORD');
	DB::$dbName = getenv('DB_DATABASE');
	DB::$host = getenv('DB_HOST'); //defaults to localhost if omitted
	//DB::$port = '3306'; // defaults to 3306 if omitted
	DB::$encoding = 'utf8'; // defaults to latin1 if omitted
	DB::$error_handler = 'my_error_handler';
#	DB::$nested_transactions = true;

	use Slim\Slim;

	$app = new Slim;

	$mandrill = new Mandrill(getenv('MANDRILL_KEY'));

	class Email {
		private $mandrill;
		private $template_name;
		private $template_content;
		private $message;
		private $data;

		function __construct($mandrill) {
			$this->mandrill = $mandrill;
		}

		public function setData($data) {
			$this->data = $data;
		}

		public function send() {
			$title = $this->data['title'];
			$subtitle = $this->data['subtitle'];
			// $body = $this->data['body'];
			$published_at = date("F d, Y",strtotime($this->data['published_at']));
			$id = $this->data['id'];

			$mergevars = array();
			$reciptmetadata = array();
			$staff = array();
			$contacts = DB::query("SELECT CONCAT(firstname,' ',lastname) as name, email, 'to' as type FROM contacts WHERE email IS NOT NULL AND email!='' AND unsubscribed_at IS NULL ORDER BY id DESC");
			// print_r($staff);
			// die;
			$filteredemails = array();
			$dupemails = array();
			$emails = $contacts;
			foreach($emails as $email) {
				if(!in_array($email['email'], $dupemails)) {
					$filteredemails[] = $email;
					$dupemails[] = $email['email'];
				}
			}
			// print_r($filteredemails);
			// die;
			foreach($filteredemails as $filteredemail) {
				$mergevars[] = array(
					'rcpt'=>$filteredemail['email'],
					'vars' => array(
	                    array(
	                        'name' => 'name',
	                        'content' => 'Hi '.$filteredemail['name']
	                    ),
	                    array(
	                        'name' => 'email',
	                        'content' => $filteredemail['email']
	                    ),
	                    array(
	                        'name' => 'lead',
	                        'content' => 'The following information has been added to the Blog:'
	                    )
                    )
                );
                $reciptmetadata[] = array(
	                'rcpt' => $filteredemail['email'],
	                'values' => array('name' => $filteredemail['name'])
	            );
			}
			$template_name = 'new-post';
		    $template_content = array(
		        array(
		            'name' => 'body',
		            'content' => "<a href='http://".$_SERVER['SERVER_NAME']."/#/posts/$id'><h3>$title</h3><h4>$subtitle</h4><p>Posted on $published_at</p></a>"
		        ),
		        array(
		            'name' => 'name',
		            'content' => '*|NAME|*'
		        )
		        ,
		        array(
		            'name' => 'lead',
		            'content' => '*|LEAD|*'
		        )
		    );
		    $message = array(
		        'subject' => 'Blog Update - New Post',
		        'from_email' => 'blog@test.com',
		        'from_name' => 'Blog Update',
		        'to' => $filteredemails,
		        'headers' => array('Reply-To' => 'blog@test.com'),
		        'important' => false,
		        'track_opens' => true,
		        'track_clicks' => true,
		        'auto_text' => true,
		        // 'auto_html' => true,
		        // 'inline_css' => null,
		        // 'url_strip_qs' => null,
		        'preserve_recipients' => false,
		        'view_content_link' => true,
		        // 'bcc_address' => 'message.bcc_address@example.com',
		        // 'tracking_domain' => null,
		        // 'signing_domain' => null,
		        // 'return_path_domain' => null,
		        'merge' => true,
		        'merge_language' => 'mailchimp',
		        'global_merge_vars' => array(
		            array(
		                'name' => 'body',
		                'content' => 'body content'
		            )
		        ),
		        'merge_vars' => $mergevars,
		        'tags' => array('blog-update-post'),
		        'metadata' => array('website' => $_SERVER['SERVER_NAME']),
		        'recipient_metadata' => $reciptmetadata
		        // ,
		        // 'attachments' => array(
		        //     array(
		        //         'type' => 'text/plain',
		        //         'name' => 'myfile.txt',
		        //         'content' => 'ZXhhbXBsZSBmaWxl'
		        //     )
		        // ),
		        // 'images' => array(
		        //     array(
		        //         'type' => 'image/png',
		        //         'name' => 'IMAGECID',
		        //         'content' => 'ZXhhbXBsZSBmaWxl'
		        //     )
		        // )
		    );

			$async = false;

			$result = $this->mandrill->messages->sendTemplate($template_name, $template_content, $message, $async);
			return $result;
		}
	}

	// $app->get("/",function() use ($app) {
	// 	echo file_get_contents("index.html");
	// });

	// $app->response->headers->set('Content-Type', 'application/json');

	$app->hook('slim.before.dispatch', function () use ($app){
		$route = $app->router()->getCurrentRoute();
		
		if(in_array($route->getName(),array("newPost","editPost","deletePost"))) {
			if(!isset($_SESSION['blog']) || $_SESSION['blog']['login']!==true) {
				$app->status(422);
	            $result = array("message" => "Permission Denied");
	            echo json_encode($result);
	            $app->stop();
			}
		}
	});

	$app->get("/unsub",function() use ($app){
		$params = $app->request->params();
		if(isset($params['email'])) {
			$contact = DB::queryFirstRow("SELECT * FROM contacts WHERE email=%s",$params['email']);
			if($contact) {
				DB::update("contacts",array("unsubscribed_at"=>date("Y-m-d H:i:s")),"id=%d",$contact['id']);
				// $staff->usubscribed_at = date("Y-m-d H:i:s");
				// header("Location: /#/unsub");
				$app->response->headers->set('Location', '/#/unsub');
			} else {
				echo "No Email Found";
			}
			// $app->response->headers->set('Location', '/#/unsub');
			// Header("Location: /#/unsub");
		}
	});

	$app->group("/api",function() use ($app) {
		global $mandrill;
		$app->get("/user",function() use ($app) {
			if(isset($_SESSION['blog']['login']) && $_SESSION['blog']['login']) {
				echo json_encode(array("success"=>$_SESSION['blog']));
			} else {
				$app->status(422);
	            $result = array("message" => "Permission Denied");
	            echo json_encode($result);
	            $app->stop();
			}
		});

		$app->get("/logout",function() use ($app) {
			unset($_SESSION['blog']);
			echo json_encode(array("success"=>true));
		});

		$app->post("/login",function() use ($app) {
			$req = $app->request();
			$body = $req->getBody();
			$bodydata = json_decode($body);

			if(isset($bodydata->username)) {
				if(isset($bodydata->password)) {
					$getuser = DB::queryFirstRow("SELECT id, username, name, password FROM users WHERE username=%s",$bodydata->username);
					if($getuser) {
						$passmatch = password_verify($bodydata->password,$getuser['password']);
						if(!$passmatch && $studentresults['password']==$password && password_needs_rehash($studentresults['password'],PASSWORD_BCRYPT)) {
							$passoptions = array('cost' => 12);
							$newhash = password_hash($password, PASSWORD_BCRYPT,$passoptions);
							DB::update("students",array("password"=>$newhash),"ID=%d",$studentresults['id']);
							$passmatch = password_verify($password,$newhash);
						}
						if($passmatch) {
							unset($getuser['password']);
							$_SESSION['blog'] = $getuser;
							$_SESSION['blog']['login'] = true;
							echo json_encode(array("success"=>$_SESSION['blog']));
						} else {
							$app->status(500);
							echo json_encode(array("error"=>"","message"=>"Incorrect Password"));
						}
					} else {
						$app->status(500);
						echo json_encode(array("error"=>"","message"=>"No Account Found"));
					}
				} else {
					$app->status(500);
					echo json_encode(array("error"=>"","message"=>"Must Include Password"));
				}	
			} else {
				$app->status(500);
				echo json_encode(array("error"=>"","message"=>"Must Include Username"));
			}
		});

		$app->get("/posts",function(){
			// DB::useDB('staff');
			if(isset($_SESSION['blog']) && $_SESSION['blog']['login'] == true) {
				$posts = DB::query("SELECT * FROM posts");
			} else {
				$posts = DB::query("SELECT * FROM posts  WHERE published=1");
			}
			foreach($posts as &$post) {
				$post['tags'] = DB::query("SELECT post_tags.* FROM post_tags LEFT JOIN post_tags_lu ON post_tags_lu.tag_id=post_tags.id WHERE post_tags_lu.post_id=%d",$post['id']);
			}
			echo json_encode($posts);
		});

		$app->get("/tags",function(){
			$tags = DB::query("SELECT post_tags.* FROM post_tags LEFT JOIN (post_tags_lu,posts) ON (post_tags_lu.tag_id=post_tags.id AND posts.id=post_tags_lu.post_id) WHERE posts.published=1 GROUP BY post_tags.id");
			echo json_encode($tags);
		});

		$app->get("/posts/:id",function($id){
			// DB::useDB('staff');
			// $post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);
			if(isset($_SESSION['blog']) && $_SESSION['blog']['login'] == true) {
				$post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);
			} else {
				$post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d AND published=1",$id);
			}
			if($post) {
				$post['tags'] = DB::query("SELECT post_tags.* FROM post_tags LEFT JOIN post_tags_lu ON post_tags_lu.tag_id=post_tags.id WHERE post_tags_lu.post_id=%d",$post['id']);
				echo json_encode($post);
			} else {
				echo json_encode(array("success"=>false));
			}
		});

		$app->post("/posts",function() use ($app) {
			global $mandrill;
			$req = $app->request();
			$body = $req->getBody();
			$bodydata = (array)json_decode($body);
			$bodydata['created_at'] = date("Y-m-d H:i:s");
			$bodydata['author'] = $_SESSION['blog']['ID'];
			if($bodydata['published'] ==  1) {
				$bodydata['published_at'] = date("Y-m-d H:i:s");
			}
			// print_r($bodydata);

			if(isset($bodydata['tags'])) {
				$tags = $bodydata['tags'];
			}

			unset($bodydata['tags']);

			DB::insert("posts",$bodydata);
			$id = DB::insertId();

			if(isset($tags)) {
				DB::delete("post_tags_lu","post_id=%d",$id);
				foreach($tags as $tag) {
					$tag = (array)$tag;
					if(isset($tag['id'])) {
						// DB::update("post_tags",$tag,"id=%d",$tag['id']);
						DB::insert("post_tags_lu",array("tag_id"=>$tag['id'],"post_id"=>$id));
					} else {
						DB::insert("post_tags",$tag);
						$tagid = DB::insertId();
						DB::insert("post_tags_lu",array("tag_id"=>$tagid,"post_id"=>$id));
					}
				}
			}

			$post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);
			$post['tags'] = DB::query("SELECT post_tags.* FROM post_tags LEFT JOIN post_tags_lu ON post_tags_lu.tag_id=post_tags.id WHERE post_tags_lu.post_id=%d",$id);
			if($id) {
				if($post['published'] == 1) {
					// email($post);
					$email = new Email($mandrill);
					$email->setData($post);

					$result = $email->send();
				}
			}
			echo json_encode($post);
		})->setName("newPost");

		$app->post("/posts/:id",function($id) use ($app) {
			global $mandrill;
			$req = $app->request();
			$body = $req->getBody();
			$bodydata = (array)json_decode($body);
			if($bodydata['published'] ==  1) {
				$bodydata['published_at'] = date("Y-m-d H:i:s");
			}

			if(isset($bodydata['tags'])) {
				DB::delete("post_tags_lu","post_id=%d",$id);
				foreach($bodydata['tags'] as $tag) {
					$tag = (array)$tag;
					if(isset($tag['id'])) {
						// DB::update("post_tags",$tag,"id=%d",$tag['id']);
						DB::insert("post_tags_lu",array("tag_id"=>$tag['id'],"post_id"=>$id));
					} else {
						DB::insert("post_tags",$tag);
						$tagid = DB::insertId();
						DB::insert("post_tags_lu",array("tag_id"=>$tagid,"post_id"=>$id));
					}
				}
			}

			unset($bodydata['tags']);

			$preupdatepost = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);

			DB::update("posts",$bodydata,"id=%d",$id);
			$post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);
			$post['tags'] = DB::query("SELECT post_tags.* FROM post_tags LEFT JOIN post_tags_lu ON post_tags_lu.tag_id=post_tags.id WHERE post_tags_lu.post_id=%d",$post['id']);

			if($preupdatepost['published_at']== null && $bodydata['published_at'] != null) {
				// email($bodydata);
				$email = new Email($mandrill);
				$email->setData($bodydata);

				$result = $email->send();
			}

			echo json_encode($post);
		})->setName("editPost");

		$app->post("/posts/:id/file",function($id) use ($app) {
			$requestPost = $app->request()->post();
			// echo __DIR__.$filepath.'/emails';
			$storage = new \Upload\Storage\FileSystem(__DIR__.'/images');
			$file = new \Upload\File('file', $storage);
		
			$new_filename = uniqid();
			// $parsedname = cleanstring($file->getName());
			// $file->setName($parsedname."_".$new_filename);
		
			// Validate file upload
			// MimeType List => http://www.webmaster-toolkit.com/mime-types.shtml
			$file->addValidations(array(
			    // Ensure file is of type "image/png"
			    // new \Upload\Validation\Mimetype('application/pdf'),

			    //You can also add multi mimetype validation
			    new \Upload\Validation\Mimetype(array('image/png', 'image/gif', 'image/jpg', 'image/jpeg')),

			    // Ensure file is no larger than 5M (use "B", "K", M", or "G")
			    new \Upload\Validation\Size('20M')
			));
		
			// Access data about the file that has been uploaded
			$data = array(
			    'name' => $file->getNameWithExtension(),
			    'extension' => $file->getExtension(),
			    // 'mime' => $file->getMimetype(),
			    'size' => $file->getSize(),
			    'md5' => $file->getMd5(),
			    'dimensions' => $file->getDimensions()
			);
		
			// Try to upload file
			try {
			    // Success!
			    $result = $file->upload();
			} catch (\Exception $e) {
			    // Fail!
			    $errors = $file->getErrors();
			}
			DB::update("posts",array("image"=>"images/".$data['name']),"id=%d",$id);
			$post = DB::queryFirstRow("SELECT * FROM posts WHERE id=%d",$id);
			echo json_encode($post);
		})->setName("uploadImage");

		$app->delete("/posts/:id",function($id){
			DB::delete("posts","id=%d",$id);
		})->setName("deletePost");

	});

	$app->run();

