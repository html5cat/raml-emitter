#!/usr/bin/env node

'use strict';

var raml = require('raml-parser');
var yaml = require('js-yaml');
var raml2html = require('raml2html');

var fs = require('fs');



function emit(ramlObject) {
  // console.log(ramlObject);

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
  }, function(error) {
      console.log('Error parsing: ' + error);
      process.exit(1);
  });


  var result = "#%RAML 0.8\n" + yaml.dump(ramlObject);

  // document.body.innerHTML = '<pre>'+ JSON.stringify(data, null, 2) + '</pre>';
  document.body.innerHTML = '<pre>'+ result + '</pre>';

  // if not run in browser
  if (! window) {
    fs.writeFile("output.raml", result, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
    });
  }

}

raml.loadFile('example.raml').then(
  function (data) {
    emit(data);
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });



module.exports.emit = emit;
