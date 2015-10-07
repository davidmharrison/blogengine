'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:PostCtrl
 # @description
 # # PostCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
	.controller 'PostCtrl', ($scope,$routeParams,$rootScope,$filter,$location,Posts,login) ->
		$scope.awesomeThings = [
			'HTML5 Boilerplate'
			'AngularJS'
			'Karma'
		]
		$scope.post = Posts.get({id:$routeParams.id},(result)->
			if result.success == false
				$location.path("/");
		);

		$rootScope.post = $scope.post;
		$scope.user = login.user;
		$scope.nextpost = null;

		Posts.query({},(result)->
			posts = $filter("filter")(result,{published:"1"},true);
			posts = $filter("orderBy")(posts,'published_at',true);
			
			angular.forEach(posts,(post,index)->
				if post.id == $scope.post.id
					$scope.nextpost = posts[index+1];
			)
		);