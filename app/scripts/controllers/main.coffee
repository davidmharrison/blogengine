'use strict'

###*
 # @ngdoc function
 # @name staffApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the staffApp
###
angular.module('staffApp')
  .controller 'MainCtrl', ($scope,$routeParams,$filter,Posts,Tags) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    posts = Posts.query();
    if $routeParams.tag
      $scope.tag = $routeParams.tag;
      filteredposts = [];
      posts.$promise.then((posts)->
        angular.forEach(posts,(post)->
          tags = $filter("filter")(post.tags,{text:$routeParams.tag},true);
          if tags.length
            filteredposts.push(post);
        );
      )
      posts = filteredposts;
    $scope.posts = posts;
    $scope.tags = Tags.query();