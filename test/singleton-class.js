// Generated by CoffeeScript 1.3.3
(function() {
  var TestClass, singleton,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  singleton = require('../lib/singleton');

  TestClass = (function(_super) {

    __extends(TestClass, _super);

    function TestClass(instantiated_time) {
      this.instantiated_time = instantiated_time != null ? instantiated_time : (new Date()).toString();
      this.testString = 'hello';
    }

    return TestClass;

  })(singleton);

  module.exports = TestClass.get();

}).call(this);
