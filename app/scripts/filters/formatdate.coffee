'use strict'

###*
 # @ngdoc filter
 # @name staffApp.filter:formatdate
 # @function
 # @description
 # # formatdate
 # Filter in the staffApp.
###
angular.module('staffApp')
  .filter 'formatdate', ->
    (input) ->
      date = new Date(input);
      months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      return months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();

angular.module('staffApp')
  .filter 'parse', ->
    (input) ->
    	return input.replace(/\-/g," ");

angular.module('staffApp')
  .filter 'newfilter', ->
    (input,search) ->
    	matches = [];
    	# console.log(input,search);
    	ages = for field, value of search
    		field = field
    		space = new RegExp(' ','g');
    		valueregex = new RegExp(value.replace(space,'\\\s'),'ig');
    	for record in input
    		if(field == '$')
    			truthy = false
    			for recordfield, recordvalue of record
    				if recordvalue && angular.isString(recordvalue)
    					recordvalue = recordvalue.replace(/<(?:.|\n)*?>/gm, '').trim()
    					# console.log(recordvalue);
    					if recordvalue.match(valueregex) && recordvalue.match(valueregex).length
    						truthy = true
    			if truthy == true
    				matches.push(record);

    		else if record[field].match(valueregex)
    			matches.push(record);
    	matches


angular.module('staffApp')
  .filter 'snippit', ->
    (input,search) ->
    	# console.log(search);
    	if(search.length >= 3)
    		space = new RegExp(' ','g');
	    	regex = new RegExp('('+search.replace(space,'\\\s')+')','ig');
	    	matches = [];
	    	highlights = [];
	    	input = input.replace(/<(?:.|\n)*?>/gm, '');
	    	while (match = regex.exec(input)) != null
	    	# 	console.log(match);
	    		matches.push(match);

	    	for match in matches
		    	highlights.push(input.substring(match.index - 50, match.index + 50).replace(regex,"<span class='highligh'>$1</span>"));

	    	# console.log(regex,matches,highlights);
	    	# rawstring = input.replace(/<(?:.|\n)*?>/gm, '');
	    	return highlights.join(" ... ");
	    	# return input.replace(/\-/g," ");

