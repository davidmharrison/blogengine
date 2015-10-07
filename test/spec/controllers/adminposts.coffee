'use strict'

describe 'Controller: AdminpostsCtrl', ->

  # load the controller's module
  beforeEach module 'staffApp'

  AdminpostsCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    AdminpostsCtrl = $controller 'AdminpostsCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
