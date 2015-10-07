'use strict'

describe 'Filter: formatdate', ->

  # load the filter's module
  beforeEach module 'staffApp'

  # initialize a new instance of the filter before each test
  formatdate = {}
  beforeEach inject ($filter) ->
    formatdate = $filter 'formatdate'

  it 'should return the input prefixed with "formatdate filter:"', ->
    text = 'angularjs'
    expect(formatdate text).toBe ('formatdate filter: ' + text)
