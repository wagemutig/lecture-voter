var server = require('express')();
var http = require('http').Server(server);
var expressLayouts = require('express-ejs-layouts');
var io = require('socket.io')(http);
var Lecture = require('./models/Lecture.js');
var Voter = require('./models/Voter.js');
var TotalVotes = require('./models/TotalVotes.js')

server.set('view engine', 'ejs');
server.set('views',__dirname + '/views');
server.use(expressLayouts)
server.use(require('express').static(__dirname + '/public'));


lecture = new Lecture;
totalVotes = new TotalVotes;

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
  io.sockets.emit('connected user update', {countVoters: lecture.countVoters()})

  user.on('userVote', function(data){
    var userVote = data.userVote
    voter.addVote(new Date().getTime(), userVote)
    totalVotes.changeBy(userVote)
    console.log(voter.data)
  }); 

  user.on('disconnect', function() {
    lecture.removeVoter(voter)
    console.log("===Disconnection===")
    io.sockets.emit('connected user update', {countVoters: lecture.countVoters()}) 
  });

});

  setInterval(function() {
    io.sockets.emit('graph update', {totalVotes: totalVotes.value})
  }, 1000);