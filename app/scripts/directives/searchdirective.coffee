'use strict'

###*
 # @ngdoc directive
 # @name staffApp.directive:searchDirective
 # @description
 # # searchDirective
###
angular.module 'staffApp'
  .directive 'searchDirective', ->
    restrict: 'EA'
    scope:
    	search: '=search',
    	input: '=input'
    template: '<div></div>'
    link: (scope, element, attrs) ->
    	# element.text 'this is the searchDirective directive'
    	input = scope.input
    	scope.$watch("search",()->
	    	regex = new RegExp('('+scope.search+')','gi');
	    	# regex = '/'+scope.search+'/ig'
	    	matches = [];
	    	highlights = [];
	    	match = "";
	    	# console.log(input,regex);
	    	while (match = regex.exec(input)) != null
	    		# console.log(match);
	    		matches.push(match);

	    	for match in matches
		    	highlights.push(input.substring(match.index - 20, match.index + 20).replace(/<(?:.|\n)*?>/gm, '')); # .replace(regex,"<span class='highligh'>$1</span>")

	    	# scope.input = highlights.join();
	    );
    	# rawstring = input.replace(/<(?:.|\n)*?>/gm, '');
    	# element.text
    	# return input.replace(regex,"<span class='highligh'>$1</span>")
    	# return input.replace(/\-/g," ");

