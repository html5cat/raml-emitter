var raml = require('raml-parser');
var fs = require('fs');

raml.loadFile('example.raml').then(
  function (data) {
    fs.writeFile("output.raml", emit(data), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
      });
  },
  function(error) {
   console.log('Error parsing: ' + error);
  });
