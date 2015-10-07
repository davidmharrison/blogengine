'use strict'

describe 'Controller: AdminPostCtrl', ->

  # load the controller's module
  beforeEach module 'staffApp'

  AdminPostCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    AdminPostCtrl = $controller 'AdminPostCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
