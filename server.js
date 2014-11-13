var server = require('express')();
var http = require('http').Server(server);
var expressLayouts = require('express-ejs-layouts');
var io = require('socket.io')(http);
var Lecture = require('./models/Lecture.js');
var Voter = require('./models/Voter.js');

server.set('view engine', 'ejs');
server.set('views',__dirname + '/views');
server.use(expressLayouts)
server.use(require('express').static(__dirname + '/public'));


lecture = new Lecture;

server.get('/', function (req, res) {
  res.render('index', { layout: 'layout'})
});

server.get('/vote', function (req, res) {
  res.render('vote', { layout: 'layout'})
});

var port = process.env.PORT || 1337;

http.listen(port, function() {
  console.log('Time to vote at ' + port)
})

module.exports = http;

io.on('connection', function(user) {
  voter = new Voter;
  lecture.addVoter(voter);
  console.log("===New Connection===")
  console.log(lecture)
  io.sockets.emit('connected user update', {countVoters: lecture.countVoters()}) 

  user.on('disconnect', function() {
    lecture.removeVoter(voter)
    console.log("===Disconnection===")
    console.log(lecture)
    io.sockets.emit('connected user update', {countVoters: lecture.countVoters()}) 
  });
});