'use strict'

describe 'Controller: AdminnewpostCtrl', ->

  # load the controller's module
  beforeEach module 'staffApp'

  AdminnewpostCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    AdminnewpostCtrl = $controller 'AdminnewpostCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
