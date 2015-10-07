'use strict'

describe 'Service: login', ->

  # load the service's module
  beforeEach module 'staffApp'

  # instantiate service
  login = {}
  beforeEach inject (_login_) ->
    login = _login_

  it 'should do something', ->
    expect(!!login).toBe true
