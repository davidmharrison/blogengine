'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
