var server = require('express')();
var http = require('http').Server(server);
var expressLayouts = require('express-ejs-layouts');
var io = require('socket.io')(http);

var Lecture = require('./lib/Lecture.js');
var Voter = require('./lib/Voter.js');

server.set('view engine', 'ejs');
server.set('views',__dirname + '/views');
server.use(expressLayouts)
server.use(require('express').static(__dirname + '/public'));

var lecture = new Lecture();
var port = process.env.PORT || 1337;

server.get('/', function (req, res) {
  res.render('index', { layout: 'layout'})
});

server.get('/vote', function (req, res) {
	voter = new Voter;
	lecture.addVoter(voter);
  res.render('vote', { layout: 'layout'})
});

http.listen(port, function() {
  console.log('Time to vote at ' + port)
})

module.exports = http;

io.on('connection', function(connection) {
  
  console.log("===========NEW CONNECTION============")
  voter = new Voter;
  voter.connect(connection);
  lecture.addVoter(voter);
  
  io.sockets.emit('update voter count', {countVoters: lecture.countVoters()})

  voter.connection.on('userVote', function(data) {
    var userVote = data.userVote
    voter.addVote(new Date().getTime(), userVote)
    lecture.updateTotalVotes(userVote)
  });

  voter.connection.on('disconnect', function() {
    lecture.removeVoter(voter)
    io.sockets.emit('update voter count', {countVoters: lecture.countVoters()})
  });

});

setInterval(function(){
  io.sockets.emit('graph update', {totalVotes: lecture.totalVotes})
  console.log(lecture.totalVotes)
},1000);