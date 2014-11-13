$(document).ready(function() {
	$('button').on('click', function() {
		window.location = ('/vote');
	})

  var userVote = 0;
  var chart = new SmoothieChart({maxValue:50,minValue:-50})
  var graph = $('#graph')
  var votes = new TimeSeries()
  var totalVotes = 0
  var lineStyle = {strokeStyle: 'white', lineWidth:3}

  chart.streamTo(document.getElementById("graph"), 1000)
  
  $('#user-votes').text(userVote);

  var user = io.connect('http://192.168.50.141');
  user.on('connected user update', function(data) {
    console.log(data.countVoters + ' voters connected')
    $('#connected-users').text(data.countVoters + ' voters connected')
  });

  $('#plus').click(function(e) {
    e.preventDefault();
    $('#user-votes').text(userVote= 1);
    user.emit('userVote', {userVote: userVote})
  });

  $('#minus').click(function(e) {
    e.preventDefault();
    $('#user-votes').text(userVote= -1);
    user.emit('userVote', {userVote: userVote})
  });

  user.on('graph update', function(data){
    console.log(data.totalVotes)
    votes.append(new Date().getTime(), data.totalVotes)
  });

  chart.addTimeSeries(votes, lineStyle);

})