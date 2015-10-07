'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:NewpostCtrl
 # @description
 # # NewpostCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'NewpostCtrl', ($scope,$location,Posts) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    $scope.post = new Posts;
    $scope.post.draft = true;

    $scope.savePost = () ->
    	$scope.post.draft = false;
    	$scope.post.published = true;
    	$scope.post.$save(()->
    		$location.path("/posts/"+result.id);
    	)

    #$scope.postcreated = (result) ->
    #	$location.path("/posts/"+result.id);

    $scope.draftPost = () ->
	    $scope.post.draft = true;
    	$scope.post.published = false;
    	$scope.post.$save(()->
    		$location.path("/posts/"+result.id);
    	)