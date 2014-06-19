#!/usr/bin/env node

'use strict';

var raml = require('raml-parser');
var fs = require('fs');

function multilineIndent (str, indentStr) {
  console.log(str.replace(/\n/g, "\n" + indentStr));
  return str.replace(/\n/gm, "\n" + indentStr);
}

function traverse (ramlObject, indentLevel) {
  var i;
  var str = "";
  var indentStr = "";

  for (i = 0; i < indentLevel; i++) {
    indentStr += " ";
  }

  for (var prop in ramlObject) {
    if (typeof(ramlObject[prop]) === 'object') {
      str += indentStr + prop + ":\n"
      str += traverse(ramlObject[prop], indentLevel + 2);
    } else {
      str += indentStr + prop + ": " + multilineIndent(ramlObject[prop], indentStr) + "\n";
    }
  }
  return str;
}

function emit(ramlObject) {
  console.log(ramlObject);
  var result = "#%RAML 0.8\n";

  result += traverse(ramlObject, 0);

  // result = JSON.stringify(ramlObject, null, 2);

  return result;
}

module.exports.emit = emit;


raml.loadFile('example.raml').then(
  function (data) {
    document.body.innerHTML = '<pre>'+ emit(data) + '</pre>';
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });
