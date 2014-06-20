/* global describe, it */
var util     = require('util');
var assert   = require('assert');
var fs       = require('fs');
var emit     = require('../');


/**
 * An array of all the tests to execute. Tests are in the format of:
 * ["params", "object", "valid"]
 *
 * @type {Array}
 */
var TESTS = [
  ['example.json', 'output.raml']

];

describe('emit-raml', function () {
  /**
   * Run through each of the defined tests to generate the test suite.
   */
  TESTS.forEach(function (test) {
    var source, output;
    var sourceFile = test[0];
    var outputFile = test[1];

    fs.readFile(sourceFile, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      source = data;

      fs.readFile(outputFile, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        output = data;
        console.log(source);
        console.log(output);
      });
    });


    var description = [
      util.inspect(sourceFile),
      util.inspect(outputFile)
    ].join(' ');

    it(description, function () {
      assert.equal(source, output);
    });
  });
});
