'use strict'

describe 'Directive: searchDirective', ->

  # load the directive's module
  beforeEach module 'staffApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<search-directive></search-directive>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the searchDirective directive'
