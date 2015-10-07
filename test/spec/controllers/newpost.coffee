'use strict'

describe 'Controller: NewpostCtrl', ->

  # load the controller's module
  beforeEach module 'staffApp'

  NewpostCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    NewpostCtrl = $controller 'NewpostCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
