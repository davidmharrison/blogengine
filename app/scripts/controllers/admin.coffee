'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:AdmincontrollerCtrl
 # @description
 # # AdmincontrollerCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'AdminCtrl', ($scope,login,Posts) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    # console.log(Posts);
    $scope.posts = Posts.query();