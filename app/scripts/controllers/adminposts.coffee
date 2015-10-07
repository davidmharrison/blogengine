'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:AdminpostsCtrl
 # @description
 # # AdminpostsCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'AdminpostsCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
