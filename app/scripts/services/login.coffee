'use strict'

###*
 # @ngdoc service
 # @name staffApp.login
 # @description
 # # login
 # Service in the staffApp.
###
angular.module('staffApp')
	.service 'login', ($http,$location)->
		login = {
			user: null
			check: () ->
				$http.get("api/user").success((result)->
					login.user = result.success
				);
			signin: (username,password) ->
				$http.post("api/login",{username:username,password:password}).success((result,data)->
					# console.log(result,data);
					if result.success
						login.user = result.success
						$location.path("/admin");
				);
			logout: () ->
				$http.get("api/logout").success((result,data)->
					login.user = null;
				);
		}
		# AngularJS will instantiate a singleton by calling "new" on this function
