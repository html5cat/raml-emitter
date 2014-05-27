

module.exports = function() {

  var raml = require('raml-parser');

   raml.loadFile('example.raml').then( function(data) {
     console.log(data);
   }, function(error) {
     console.log('Error parsing: ' + error);
   });

};
