'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:AdminPostCtrl
 # @description
 # # AdminPostCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'AdminPostCtrl', ($scope,$rootScope,$routeParams,$location,$upload,$http,Posts) ->

	$scope.files = [];

	$scope.post = Posts.get({id:$routeParams.id});
	$rootScope.post = $scope.post;

	$http.get("/api/tags").success((result)->
		$scope.tags = result;
	)

	$scope.savePost = () ->
		$scope.post.$save((result)->
			if $scope.files.length
				$scope.uploadFiles(result);
			else
				$location.path("/posts/"+result.id);
		);

	$scope.onFileSelect = (files) ->
		console.log(files);
		$scope.files.push(files);

	$scope.uploadFiles = (result) ->
		$file = $scope.files[0];
		upload = $upload.upload({
			url: 'api/posts/'+$routeParams.id+'/file',
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