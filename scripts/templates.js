angular.module('staffApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/about.html',
    "<p>This is the about view.</p>\n"
  );


  $templateCache.put('app/views/admin.html',
    "<!-- <h2>Posts <a class=\"small\" href=\"#/admin/posts/new\">new</a></h2>\n" +
    "<hr>\n" +
    "<div ng-include=\"'views/adminposts.html'\"></div> -->\n" +
    "\n" +
    "<!-- Page Header -->\n" +
    "<!-- Set your background image for this header on the line below. -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>Admin</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <span class=\"subheading\">View and Edit All Posts</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "\t      \t<div ng-include=\"'views/adminposts.html'\"></div>  \n" +
    "\t    </div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('app/views/adminposts.html',
    "<!-- <div class=\"posts\">\n" +
    "\t<div class=\"post\" ng-repeat=\"post in posts\">\n" +
    "\t\t<h1><a href=\"#/admin/posts/{{post.id}}\">{{post.title}}</a></h1>\n" +
    "\t\t<h5>{{post.datetime}}</h5>\n" +
    "\t\t<div ng-bind-html=\"post.body\"></div>\n" +
    "\t\t<hr>\n" +
    "\t</div>\n" +
    "</div> -->\n" +
    "<div class=\"post-preview\" ng-repeat=\"post in posts  | orderBy:'created_at':1\">\n" +
    "    <a href=\"#/admin/posts/{{post.id}}\">\n" +
    "        <h2 class=\"post-title\">\n" +
    "           {{post.title}}\n" +
    "        </h2>\n" +
    "        <h3 class=\"post-subtitle\">\n" +
    "            {{post.subtitle}}\n" +
    "        </h3>\n" +
    "    </a>\n" +
    "    <p class=\"post-meta\">Created<!-- by <a href=\"#\">Start Bootstrap</a> --> on {{post.created_at | formatdate}}  <span ng-if=\"post.draft == 1\" class=\"label label-warning\">Draft</span></p>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<!-- Pager -->\n" +
    "<ul ng-if=\"posts.length > 20\" class=\"pager\">\n" +
    "    <li class=\"next\">\n" +
    "        <a href=\"#/\">Older Posts &rarr;</a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('app/views/editpost.html',
    "<!--  ng-style=\"{'background-image': 'url('+post.image+')'}\"  -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "            <!--  ng-class=\"{'no-image':!post.image}\" -->\n" +
    "                <div class=\"post-heading\">\n" +
    "                    <h1>{{post.title}}</h1>\n" +
    "                    <h2 class=\"subheading\">{{post.subtitle}}</h2>\n" +
    "                    <span class=\"meta\">Posted<!-- by <a href=\"#\">Start Bootstrap</a> --> on {{post.created_at | formatdate}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "\t\t<form class=\"form-horizontal\" name=\"newpost\">\n" +
    "\t\t\t<fieldset>\n" +
    "\t\t\t    <!-- <legend>New Post</legend> -->\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<input class=\"form-control\" ng-model=\"post.title\" type=\"text\" placeholder=\"Title\">\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<input class=\"form-control\" ng-model=\"post.subtitle\" type=\"text\" placeholder=\"Subtitle\">\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<div text-angular ng-model=\"post.body\"></div>\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<!-- <input class=\"form-control\" data-role=\"tagsinput\" ng-model=\"post.tags\" type=\"text\" placeholder=\"Tags\"> -->\n" +
    "\t\t\t\t\t\t<tags-input ng-model=\"post.tags\">\n" +
    "\t\t\t\t\t\t  <auto-complete source=\"tags\"></auto-complete>\n" +
    "\t\t\t\t\t\t</tags-input>\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <!-- <div class=\"form-group\">\n" +
    "\t\t\t\t    <label class=\"col-sm-12\" for=\"inputTitle\">Header Image</label>\n" +
    "\t\t\t\t    <div ng-if=\"post.image\" class=\"controls col-sm-4\">\n" +
    "\t\t\t\t\t\t<button ng-click=\"post.image=null\" class=\"btn btn-danger btn-sm\">Remove Image</button>\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t\t    <div class=\"controls\" ng-class=\"{'col-sm-8':post.image,'col-sm-12':!post.image}\">\n" +
    "\t\t\t\t\t\t<div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\n" +
    "\t\t\t\t\t\t  <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"glyphicon glyphicon-file fileinput-exists\"></i> <span class=\"fileinput-filename\"></span></div>\n" +
    "\t\t\t\t\t\t  <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Select file</span><span class=\"fileinput-exists\">Change</span>\n" +
    "\t\t\t\t\t\t  \t<input ng-file-drop ng-multiple=\"false\" accept=\"image/*\" ng-file-drop=\"onFileSelect($files)\" ng-file-drag-over-class=\"dragdrop\" ng-file-select=\"onFileSelect($files)\" type=\"file\" name=\"image\">\n" +
    "\t\t\t\t\t\t  </span>\n" +
    "\t\t\t\t\t\t  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remove</a>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t    </div> -->\n" +
    "\t\t\t</fieldset>\n" +
    "\t\t\t<button ng-if=\"isSaving\" disabled type=\"submit\" class=\"btn btn-success save\" id=\"saving\">Saving <img width=\"20\" height=\"20\" src=\"images/loader.gif\"></button>\n" +
    "\t\t\t<button ng-if=\"!isSaving && post.draft == 1\" ng-disabled=\"newpost.$invalid\" ng-click=\"savePost()\" type=\"submit\" id=\"save\" class=\"btn btn-warning save\">Update Draft</button>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<button ng-if=\"!isSaving && post.published == 1\" ng-disabled=\"newpost.$invalid\" ng-click=\"savePost()\" type=\"submit\" id=\"save\" class=\"btn btn-success save\">Update</button>\n" +
    "\t\t\t<button ng-if=\"!isSaving && post.published == 0\" ng-disabled=\"newpost.$invalid\" ng-click=\"post.published=1;post.draft=0;savePost()\" type=\"submit\" id=\"save\" class=\"btn btn-success save\">Publish</button>\n" +
    "\t\t\t<button ng-if=\"!isSaving && post.published == 1\" ng-disabled=\"newpost.$invalid\" ng-click=\"post.published=0;post.draft=1;savePost()\" type=\"submit\" id=\"save\" class=\"btn btn-danger save\">Unpublish</button>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<br>\n" +
    "\t\t</form>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    " <!-- <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\" ng-bind-html=\"post.body\">\n" +
    "            \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div> -->"
  );


  $templateCache.put('app/views/login.html',
    "<!-- Page Header -->\n" +
    "<!-- Set your background image for this header on the line below. -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>Login</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <span class=\"subheading\">Login to Blog</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "\t\t\t<div class=\"form-signin form-horizontal\">\n" +
    "\t\t\t\t<form name=\"login-form\" class=\"\" ng-submit=\"attemptLogin()\">\n" +
    "\t\t\t\t\t<div ng-show=\"loggingin\" class=\"text-center\">\n" +
    "\t\t\t\t\t\t<h2 class=\"form-signin-heading\">Logging in...</h2>\n" +
    "\t\t\t\t\t\t<img src=\"images/ajax-loader.gif\">\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t    <h2 ng-show=\"forgot==true && !loggingin\" class=\"form-signin-heading text-center\">Password Reset</h2>\n" +
    "\t\t\t\t\t<h2 ng-show=\"forgot==false\" ng-hide=\"loggingin\" class=\"form-signin-heading text-center\">Secure Sign In</h2>\n" +
    "\t\t\t\t\t<div ng-show=\"!forgot && !email\" class=\"form-group\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<input ng-model=\"username\" name=\"login\" type=\"text\" class=\"input-block-level input-sm form-control\" id=\"login\" autocomplete=\"on\" placeholder=\"Email address\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div ng-show=\"!forgot && !email\" class=\"form-group\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<input ng-model=\"password\" name=\"password\" type=\"password\" class=\"input-block-level input-sm form-control\" id=\"password\" autocomplete=\"on\" placeholder=\"Password\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div ng-show=\"!forgot && !email\" class=\"form-group\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t    \t\t<button ng-show=\"!isSigningin\" class=\"btn btn-block btn-sm btn-primary\" id=\"signin\" type=\"submit\">Sign In</button>\n" +
    "\t\t\t\t    \t\t<button ng-show=\"isSigningin\" class=\"btn btn-block btn-sm btn-primary\" disabled id=\"signin1\" >Signing In <img width=\"20\" height=\"20\" src=\"images/loader.gif\"></button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</form>\n" +
    "\t\t\t\t<div ng-show=\"error\">\n" +
    "\t\t\t\t\t<div id=\"error\" class=\"alert alert-danger\">{{error}}</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div ng-model=\"forgot\">\n" +
    "\t\t\t\t\t<div ng-show=\"forgot==true && !emaireminder\" class=\"form-group\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t    \t\t<input ng-model=\"email\" name=\"email\" type=\"text\" class=\"input-block-level input-sm form-control\" id=\"email\" placeholder=\"Email address\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<br>\n" +
    "\t\t\t\t\t\t<br>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-default col-md-5\" ng-click=\"forgot=false\" id=\"cancel\" type=\"submit\">Nevermind</button>\n" +
    "\t\t\t\t    \t\t<button class=\"btn btn-sm btn-primary col-md-6 col-md-offset-1\" ng-click=\"resetpassword()\" id=\"resetpassword\" type=\"submit\">Reset Password</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div ng-show=\"emaireminder\">\n" +
    "\t\t\t\t\t\t<div class=\"alert alert-info\">You have been sent a password reset email</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!-- <div ng-show=\"forgot!=true\" class=\"text-center forgotpass\">\n" +
    "\t\t\t\t\t<button ng-click=\"forgot=true\" style=\"color:#000;\" type=\"button\" class=\"btn btn-link\">Forgot Password?</button>\n" +
    "\t\t\t\t</div> -->\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('app/views/main.html',
    "<!-- Page Header -->\n" +
    "<!-- Set your background image for this header on the line below. -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>Blog</h1>\n" +
    "                    <!-- <img src=\"images/updates-logo.png\" class=\"hidden-xs\" height=\"88\" width=\"650\"> -->\n" +
    "                    <!-- <img src=\"images/updates-logo.png\" class=\"visible-xs logo\" height=\"47\" width=\"350\"> -->\n" +
    "                    <hr class=\"small\">\n" +
    "                    <span class=\"subheading\">Blog engine by David Harrison</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t    <div class=\"col-lg-7 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "            <header ng-if=\"tag\" class=\"tagHeader layoutSingleColumn\">\n" +
    "                <div class=\"tagHeader-prefix\">Tagged in</div>\n" +
    "                <h1 class=\"tagHeader-title\">{{tag | parse}}</h1>\n" +
    "                <hr>\n" +
    "            </header>\n" +
    "            <!-- <p ng-if=\"tag\">Posts tagged <span class=\"label label-info\">{{tag.text}}</span></p> -->\n" +
    "\t      \t<div ng-include=\"'views/posts.html'\"></div>  \n" +
    "\t    </div>\n" +
    "        <div ng-if=\"!tag\" class=\"col-lg-3 col-md-1 sidebar\">\n" +
    "            <h4>Tags</h4>\n" +
    "            <div ng-include=\"'views/tags.html'\"></div>\n" +
    "        </div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<hr> \n" +
    "\n" +
    "\n" +
    "<!-- Footer -->\n" +
    "<footer>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <ul class=\"list-inline text-center\">\n" +
    "                    <!-- <li>\n" +
    "                        <a href=\"#\">\n" +
    "                            <span class=\"fa-stack fa-lg\">\n" +
    "                                <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                                <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"#\">\n" +
    "                            <span class=\"fa-stack fa-lg\">\n" +
    "                                <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                                <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"#\">\n" +
    "                            <span class=\"fa-stack fa-lg\">\n" +
    "                                <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                                <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                    </li> -->\n" +
    "                </ul>\n" +
    "                <p class=\"copyright text-muted\">Copyright &copy; David Harrison 2015</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>"
  );


  $templateCache.put('app/views/newpost.html',
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>New Post</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <h2 class=\"subheading\">Create a new Post</h2>\n" +
    "                    <!-- <span class=\"meta\">Posted on {{post.datetime | formatdate}}</span> -->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "\t\t<form class=\"form-horizontal\" name=\"newpost\">\n" +
    "\t\t\t<fieldset>\n" +
    "\t\t\t    <!-- <legend>New Post</legend> -->\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<input class=\"form-control\" required=\"true\" ng-model=\"post.title\" type=\"text\" placeholder=\"Title\">\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<input class=\"form-control\" ng-model=\"post.subtitle\" type=\"text\" placeholder=\"Subtitle\">\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<div text-angular ng-model=\"post.body\"></div>\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <div class=\"form-group\">\n" +
    "\t\t\t\t\t<!-- <label class=\"control-label col-sm-4\" for=\"inputTitle\">Title</label> -->\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<!-- <input class=\"form-control\" data-role=\"tagsinput\" ng-model=\"post.tags\" type=\"text\" placeholder=\"Tags\"> -->\n" +
    "\t\t\t\t\t\t<tags-input ng-model=\"post.tags\">\n" +
    "\t\t\t\t\t\t  <auto-complete source=\"tags\"></auto-complete>\n" +
    "\t\t\t\t\t\t</tags-input>\n" +
    "\t\t\t\t    </div>\n" +
    "\t\t\t    </div>\n" +
    "\t\t\t    <!-- <div class=\"form-group\">\n" +
    "\t\t\t    \t<label class=\"col-sm-12\" for=\"inputTitle\">Header Image</label>\n" +
    "\t\t\t\t    <div class=\"controls col-sm-12\">\n" +
    "\t\t\t\t\t\t<div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\n" +
    "\t\t\t\t\t\t  <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"glyphicon glyphicon-file fileinput-exists\"></i> <span class=\"fileinput-filename\"></span></div>\n" +
    "\t\t\t\t\t\t  <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Select file</span><span class=\"fileinput-exists\">Change</span>\n" +
    "\t\t\t\t\t\t  \t<input ng-file-drop ng-multiple=\"false\" accept=\"image/*\" ng-file-drop=\"onFileSelect($files)\" ng-file-drag-over-class=\"dragdrop\" ng-file-select=\"onFileSelect($files)\" type=\"file\" name=\"image\">\n" +
    "\t\t\t\t\t\t  </span>\n" +
    "\t\t\t\t\t\t  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remove</a>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t    </div> -->\n" +
    "\t\t\t    <!-- <div class=\"form-group\">\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t    </div> -->\n" +
    "\t\t\t</fieldset>\n" +
    "\t\t\t<button ng-disabled=\"newpost.$invalid\" ng-click=\"draftPost()\" type=\"submit\" id=\"save\" class=\"btn btn-warning save\">Save as Draft</button>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<button ng-show=\"isSaving\" disabled type=\"submit\" class=\"btn btn-success save\" id=\"saving\">Saving <img width=\"20\" height=\"20\" src=\"images/loader.gif\"></button>\n" +
    "\t\t\t<button ng-show=\"!isSaving\" ng-disabled=\"newpost.$invalid\" ng-click=\"savePost()\" type=\"submit\" id=\"save\" class=\"btn btn-success save\">Save & Publish</button>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<br>\n" +
    "\t\t</form>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('app/views/post.html',
    "<!-- <h1>{{post.title}} <a class=\"small\" ng-if=\"user\" href=\"#/admin/posts/{{post.id}}\">edit</a></h1>\n" +
    "<hr>\n" +
    "<h5>{{post.datetime}}</h5>\n" +
    "<div ng-bind-html=\"post.body\"></div> -->\n" +
    "\n" +
    "<!-- Page Header -->\n" +
    "<!-- Set your background image for this header on the line below. -->\n" +
    "<!--  ng-style=\"{'background-image': 'url('+post.image+')'}\" -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <!-- ng-class=\"{'no-image':!post.image}\" -->\n" +
    "                <div class=\"post-heading\" heading-parallex>\n" +
    "                    <h1>{{post.title}}</h1>\n" +
    "                    <h2 class=\"subheading\">{{post.subtitle}}</h2>\n" +
    "                    <span ng-if=\"post.published_at\" class=\"meta\">Posted<!--  by <a href=\"#\">{{post.author}}</a> --> on {{post.published_at | formatdate}}</span>\n" +
    "                    <span ng-if=\"!post.published_at\" class=\"meta\">Created<!--  by <a href=\"#\">{{post.author}}</a> --> on {{post.created_at | formatdate}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<!-- Post Content -->\n" +
    "<article>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\" ta-bind ng-model=\"post.body\">\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>\n" +
    "\n" +
    "<!-- Footer -->\n" +
    "<footer ng-if=\"nextpost\" class=\"readNext\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <h3 class=\"postFooter-title\"><strong>Read Next</strong></h3>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"#/posts/{{nextpost.id}}\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                           {{nextpost.title}}\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            {{nextpost.subtitle}}\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted <!-- by <a href=\"#\">Start Bootstrap</a>  -->on {{nextpost.published_at | formatdate}}</p>\n" +
    "                </div>\n" +
    "                <!-- <p class=\"copyright text-muted\">Copyright &copy; NCUK 2015</p> -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>"
  );


  $templateCache.put('app/views/posts.html',
    "<!-- <div class=\"posts\">\n" +
    "\t<div class=\"post\" ng-repeat=\"post in posts\">\n" +
    "\t\t<h1><a href=\"#/posts/{{post.id}}\">{{post.title}}</a></h1>\n" +
    "\t\t<h5>{{post.datetime}}</h5>\n" +
    "\t\t<div ng-bind-html=\"post.body\"></div>\n" +
    "\t\t<hr>\n" +
    "\t</div>\n" +
    "</div> -->\n" +
    "\n" +
    "<div class=\"post-preview\" ng-repeat=\"post in posts | filter:{draft:0} | orderBy:'published_at':1\">\n" +
    "    <a href=\"#/posts/{{post.id}}\">\n" +
    "        <h2 class=\"post-title\">\n" +
    "           {{post.title}}\n" +
    "        </h2>\n" +
    "        <h3 class=\"post-subtitle\">\n" +
    "            {{post.subtitle}}\n" +
    "        </h3>\n" +
    "    </a>\n" +
    "    <p class=\"post-meta\">Posted <!-- by <a href=\"#\">Start Bootstrap</a>  -->on {{post.published_at | formatdate}}</p>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<!-- Pager -->\n" +
    "<ul ng-if=\"posts.length > 20\" class=\"pager\">\n" +
    "    <li class=\"next\">\n" +
    "        <a href=\"#/\">Older Posts &rarr;</a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('app/views/search.html',
    "<header class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"search col-md-12\">\n" +
    "\t\t\t<input name=\"search\" placholder=\"Search\" class=\"form-control jumbo\" autofocus ng-model=\"search\" placeholder=\"Type to search\">\n" +
    "\t\t</div>\n" +
    "\t\t<div ng-if=\"search\" class=\"\">\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<hr>\n" +
    "\t\t\t\t<div class=\"tags\">\n" +
    "\t\t\t\t\t<div class=\"heading-content\">\n" +
    "\t\t\t\t\t\t<h4 class=\"heading-title\">Tags</h4>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"tags--postTags\">\n" +
    "\t\t\t\t\t    <a ng-repeat=\"tag in tags | filter:{'text':search}\" href=\"#/tag/{{tag.text}}\">{{tag.text | parse}}</a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t<hr>\n" +
    "\t\t\t\t<div class=\"posts\">\n" +
    "\t\t\t\t\t<div class=\"heading-content\">\n" +
    "\t\t\t\t\t\t<h4 class=\"heading-title\">Posts</h4>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"post-preview\" ng-repeat=\"post in posts | newfilter:{$:search} | filter:{draft:0} | orderBy:'published_at':1\">\n" +
    "\t\t\t\t\t    <a href=\"#/posts/{{post.id}}\">\n" +
    "\t\t\t\t\t        <h2 class=\"post-title\">\n" +
    "\t\t\t\t\t           {{post.title}}\n" +
    "\t\t\t\t\t        </h2>\n" +
    "\t\t\t\t\t        <h3 class=\"post-subtitle\">\n" +
    "\t\t\t\t\t            {{post.subtitle}}\n" +
    "\t\t\t\t\t        </h3>\n" +
    "\t\t\t\t\t        <div ng-if=\"containsWord(post.body)\" ng-bind-html=\"post.body | snippit:search\"></div>\n" +
    "\t\t\t\t\t    </a>\n" +
    "\t\t\t\t\t    <p class=\"post-meta\">Posted <!-- by <a href=\"#\">Start Bootstrap</a>  -->on {{post.published_at | formatdate}}</p>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('app/views/tags.html',
    "<div class=\"tags tags--postTags\">\n" +
    "<!-- <ul class=\"list-unstyled\"> -->\n" +
    "    <!-- <li ng-class=\"{'active':tag.text==tag}\" > -->\n" +
    "    \t<a ng-repeat=\"tag in tags\" href=\"#/tag/{{tag.text}}\">{{tag.text | parse}}</a>\n" +
    "    <!-- </li> -->\n" +
    "<!-- </ul> -->\n" +
    "</div>"
  );


  $templateCache.put('app/views/unsub.html',
    "<header class=\"intro-header\" style=\"background-image: url('images/Staff.Net.Image.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>Blog</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <span class=\"subheading\">Blog Engine by David Harrison</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<h3>Sorry to see you go</h3>\n" +
    "            <p>If you wish to resubscribe in the future, email <a href=\"mailto:blog@test.com?subject=Subscribe to Blog Updates\">blog@test.com</a></p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );

}]);
