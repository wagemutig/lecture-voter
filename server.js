var server = require('express')();
var http = require('http').Server(server);

server.get('/', function (req, res) {
  res.send('<button>Start</button>');
});

server.listen(1337, function() {

  // var host= server.address().address
  // var port = server.address().port

  console.log('Hello Node at')

})

module.exports = server;
