#!/usr/bin/env node

'use strict';

var raml = require('raml-parser');
var fs = require('fs');

function emit(ramlObject) {
  var result = "";
  result = JSON.stringify(ramlObject, null, 2);

  return result;
}

raml.loadFile('example.raml').then(
  function (data) {
    emit(data);
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });

module.exports.emit = emit;
