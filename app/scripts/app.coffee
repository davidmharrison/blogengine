'use strict'

###*
 # @ngdoc overview
 # @name staffApp
 # @description
 # # staffApp
 #
 # Main module of the application.
###
angular
  .module('staffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular',
    'angularFileUpload',
    'ngTagsInput'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
        name: 'home'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/login',
        templateUrl: 'views/login.html'
        controller: 'LoginCtrl'
        name: 'login'
      .when '/logout',
        templateUrl: 'views/login.html'
        controller: 'LogoutCtrl'
        name: 'logout'
      .when '/unsub',
        templateUrl: 'views/unsub.html'
        controller: 'UnsubCtrl'
        name: 'unsub'
      .when '/search',
        templateUrl: 'views/search.html'
        controller: 'SearchCtrl'
        name: 'search'
      .when '/posts/:id',
        templateUrl: 'views/post.html'
        controller: 'PostCtrl',
        name: 'post'
      .when '/tag/:tag',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl',
        name: 'home'
      .when '/admin',
        templateUrl: 'views/admin.html'
        controller: 'AdminCtrl',
        name: 'admin'
        resolve: {
          check: (login) ->
            login.check();
        }
      .when '/admin/posts',
        templateUrl: 'views/posts.html'
        controller: 'AdminpostsCtrl',
        resolve: {
          check: (login) ->
            login.check();
        }
      .when '/admin/posts/new',
        templateUrl: 'views/newpost.html'
        controller: 'AdminnewpostCtrl',
        name: 'newpost',
        resolve: {
          check: (login) ->
            login.check();
        }
      .when '/admin/posts/:id',
        templateUrl: 'views/editpost.html'
        controller: 'AdminPostCtrl',
        name: 'post',
        resolve: {
          check: (login) ->
            login.check();
        }
      .otherwise
        redirectTo: '/'

