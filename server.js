var server = require('express')();
var http = require('http').Server(server);

server.get('/', function (req, res) {
  res.send('<button>Start</button>');
});

var port = process.env.PORT || 1337;
server.listen(port, function() {

  // var host= server.address().address
  // var port = server.address().port

  console.log('Hello Node at')

})

module.exports = server;
