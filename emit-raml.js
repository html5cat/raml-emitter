#!/usr/bin/env node

'use strict';

var raml = require('raml-parser');
var raml2html = require('raml2html');
var fs = require('fs');

function emit(ramlObject) {
  var template = require('./templates/template.handlebars');
  var resourceTemplate = require('./templates/resource.handlebars');
  var config = {
      'template': template,
      'partials': {
          'resource': resourceTemplate
      }
  };

  raml2html.parseWithConfig(ramlObject, config, function(result) {
      console.log(result);

      fs.writeFile("output.raml", result, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
      });

      return result;
  }, function(error) {
      console.log('Error parsing: ' + error);
      process.exit(1);
  });

}

raml.loadFile('example.raml').then(
  function (data) {
    emit(data);
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });

module.exports.emit = emit;
