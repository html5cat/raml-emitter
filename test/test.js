/* global describe, it */
var util     = require('util');
var assert   = require('assert');
var fs       = require('fs');
var emit     = require('../');


/**
 * An array of all the tests to execute. Tests are in the format of:
 * ["sourceRaml.raml", "outputRaml.raml"]
 *
 * @type {Array}
 */
var TESTS = [
  ['example.raml', 'output.raml']

];

describe('emit-raml', function () {
  /**
   * Run through each of the defined tests to generate the test suite.
   */
  TESTS.forEach(function (test) {
    var source, output;
    var sourceFile = test[0];
    var outputFile = test[1];

    source = fs.readFileSync(sourceFile).toString();
    output = fs.readFileSync(outputFile).toString();

    var description = [
      util.inspect(sourceFile),
      util.inspect(outputFile)
    ].join(' ');

    it(description, function () {
      assert.equal(source, output);
    });
  });
});
