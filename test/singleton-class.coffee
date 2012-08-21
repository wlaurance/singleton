singleton = require '../lib/singleton'

class TestClass extends singleton
  constructor:(@instantiated_time = (new Date()).toString())->
    @testString = 'hello'

module.exports = TestClass.get()
