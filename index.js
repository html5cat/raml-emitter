var raml = require('raml-parser');

 raml.loadFile('example.raml').then( function(data) {
   console.log(data);
 }, function(error) {
   console.log('Error parsing: ' + error);
 }).then( function() {

  raml.composeFile('example.raml').then( function(rootNode) {
      console.log('Root Node: ');
      console.log(rootNode)
    }, function(error) {
      console.log('Error parsing: ' + error);
  })
});

module.exports = function() {


};
