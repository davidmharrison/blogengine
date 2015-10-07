'use strict'

describe 'Controller: UnsubCtrl', ->

  # load the controller's module
  beforeEach module 'staffApp'

  UnsubCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    UnsubCtrl = $controller 'UnsubCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
