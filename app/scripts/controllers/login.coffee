'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:LoginCtrl
 # @description
 # # LoginCtrl
 # Controller of the staffApp
###
angular.module('staffApp').controller 'LoginCtrl', ($scope,login) ->
	$scope.awesomeThings = [
		'HTML5 Boilerplate'
		'AngularJS'
		'Karma'
	]
	$scope.attemptLogin = () ->
    	login.signin($scope.username,$scope.password);

.controller 'LogoutCtrl', ($scope,login) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    login.logout();



