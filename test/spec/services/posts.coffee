'use strict'

describe 'Service: posts', ->

  # load the service's module
  beforeEach module 'staffApp'

  # instantiate service
  posts = {}
  beforeEach inject (_posts_) ->
    posts = _posts_

  it 'should do something', ->
    expect(!!posts).toBe true
