#!/usr/bin/env node

'use strict';

function indentMultiline (string, indent) {
  string = string || "";
  indent = indent || "";
  // console.log(str.replace(/\n/g, "\n" + indentStr));
  // string.replace("\n", "\n" + indent, "g");
  return string;
}

function indentLists (el) {
  return " - " + traverse(el, indentLevel + 3);
}

function traverse (ramlObject, indentLevel) {
  var i;
  var str = "";
  var indentStr = "";
  indentLevel = indentLevel || 0;

  for (i = 0; i < indentLevel; i++) {
    indentStr += " ";
  }

  for (var prop in ramlObject) {
    // if (typeof(ramlObject[prop]) === 'object') {
    //   str += indentStr + prop + ":\n";
    //   str += traverse(ramlObject[prop], indentLevel + 2);
    // } else {

      switch (prop) {

        case "documentation":
          str += indentStr + prop + ":\n";
          str += ramlObject[prop].map(indentLists, indentLevel);
        break;

        default:
          str += indentStr + prop + ": " + indentMultiline(ramlObject[prop], indentStr) + "\n";
      }
    // }
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

module.exports = emit;
