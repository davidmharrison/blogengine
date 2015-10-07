'use strict'

###*
 # @ngdoc service
 # @name staffApp.tags
 # @description
 # # tags
 # Service in the staffApp.
###
angular.module('staffApp')
  .service 'Tags', ($resource) ->
	# AngularJS will instantiate a singleton by calling "new" on this function
	$resource('api/tags/:id', {id:'@id'}, {
		query: {method:'GET', isArray:true, cache:false},
		get: {method:'GET', cache:false, params:{id:'@id'}},
		save: {method:'POST',params:{id:'@id'}},
		insert: {method:'POST'}
	});