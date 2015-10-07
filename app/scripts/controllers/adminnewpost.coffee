'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:AdminnewpostCtrl
 # @description
 # # AdminnewpostCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'AdminnewpostCtrl', ($scope,$location,$upload,Posts) ->
	$scope.awesomeThings = [
	  'HTML5 Boilerplate'
	  'AngularJS'
	  'Karma'
	]
	$scope.post = new Posts;
	$scope.post.draft = true;

	$scope.files = [];

	$scope.savePost = () ->
		$scope.post.draft = false
		$scope.post.published = true

		$scope.post.$save((result)->
			if $scope.files.length
				$scope.uploadFiles(result);
			else
				$location.path("/posts/"+result.id);
		);

	$scope.uploadFiles = (result) ->
		angular.forEach($scope.files,(file)->
			$file = file[0];
			upload = $upload.upload({
				url: 'api/posts/'+result.id+'/file',
				file: $file,
				method: 'POST'
			}).progress((evt) ->
				console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
			).success((data, status, headers, config) ->
				console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
				$location.path("/posts/"+result.id);
			).error((err) ->
				console.log('file ' + config.file.name + 'failed to uploaded successfully. Response: ' + err);
			);
		);

	$scope.draftPost = () ->
		$scope.post.draft = true;
		$scope.post.published = false;

		$scope.post.$save((result)->
			if $scope.files.length
				$scope.uploadFiles(result);
			else 
				$location.path("/posts/"+result.id);
		);

	$scope.onFileSelect = (files) ->
		console.log(files);
		$scope.files.push(files);

	# $scope.uploader = new FileUploader();