var server = require('express')();
var http = require('http').Server(server);

server.use(require('express-ejs-layouts'));
server.use(require('express').static('public'));

server.set('view engine', 'ejs');

server.get('/', function (req, res) {
	res.render('index.ejs');
});

server.get('/vote', function (req, res) {
	res.send('<p>HAARRLOOWWW from vote</p>')
});

var port = process.env.PORT || 1337;
server.listen(port, function() {

  // var host= server.address().address
  // var port = server.address().port

  console.log('Hello Node at')

})

module.exports = server;
