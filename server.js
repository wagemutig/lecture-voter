var server = require('express')();
var http = require('http').Server(server);

server.get('/', function (req, res) {
  res.send('<button>Start</button>');
});

server.get('/vote', function (req, res) {
	res.send('<p>1 users connected</p>');
});

var port = process.env.PORT || 1337;
server.listen(port, function() {

  // var host= server.address().address
  // var port = server.address().port

  console.log('Hello Node at')

})

module.exports = server;
