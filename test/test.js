/* global describe, it */
var util     = require('util');
var assert   = require('assert');
var emit = require('../');

/**
 * An array of all the tests to execute. Tests are in the format of:
 * ["params", "object", "valid"]
 *
 * @type {Array}
 */
var TESTS = [
];

describe('emit-raml', function () {
  it('should work', function() {
    assert.equal(true, true);
  });
});

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
