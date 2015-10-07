'use strict'

describe 'Service: tags', ->

  # load the service's module
  beforeEach module 'staffApp'

  # instantiate service
  tags = {}
  beforeEach inject (_tags_) ->
    tags = _tags_

  it 'should do something', ->
    expect(!!tags).toBe true
