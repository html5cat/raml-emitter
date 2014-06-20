var raml = require('raml-parser');
var fs = require('fs');
var emit = require('../');

raml.loadFile('test/example.raml').then(
  function (data) {
    var result = emit(data);

    fs.writeFile("test/output.raml", result, function(err) {
        if(err) {
            console.log(err);
        } else {
            // console.log("The file was saved!");
        }
      });
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });
