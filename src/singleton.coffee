class Singleton
  @get: -> @instance ?= new @
  
module.exports = Singleton
