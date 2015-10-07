'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:SearchCtrl
 # @description
 # # SearchCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'SearchCtrl', ($scope,Posts,Tags) ->
	$scope.awesomeThings = [
	  'HTML5 Boilerplate'
	  'AngularJS'
	  'Karma'
	]

	$scope.containsWord = (body) ->
		if body
			space = new RegExp(' ','g');
			searchphrase = $scope.search.replace(space,'\\\s');
			valueregex = new RegExp(searchphrase,'gi');
			# if body.match(valueregex)
			# console.log(valueregex,body.match(valueregex));
			if body.replace(/<(?:.|\n)*?>/gm, '').match(valueregex).length
				return true
			else
				return false
		else
			return false


	$scope.posts = Posts.query();
	$scope.tags = Tags.query();

	return;

