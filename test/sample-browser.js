var raml = require('raml-parser');
var fs = require('fs');

var emit = require('../');

raml.loadFile('test/example.raml').then(
  function (data) {
    document.body.innerHTML = '<pre>'+ emit(data) + '</pre>';
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });
