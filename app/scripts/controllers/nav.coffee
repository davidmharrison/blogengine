'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:NavCtrl
 # @description
 # # NavCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'NavCtrl', ($scope,$route,login) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    login.check();
    $scope.login = login;
    $scope.route = $route;