$(document).ready(function() {
	$('button').on('click', function() {
		window.location = ('/vote');
	})


  var userVote = 0;
  
  $('#user-votes').text(userVote);

  $('#plus').click(function(e) {
    e.preventDefault();
    $('#user-votes').text(userVote+=1);
  });

  $('#minus').click(function(e) {
    e.preventDefault();
    $('#user-votes').text(userVote-=1);
  });

  var user = io.connect('http://192.168.50.42');
  user.on('connected user update', function(data) {
    console.log(data.countVoters + ' voters connected')
    $('#connected-users').text(data.countVoters + ' voters connected')
  });
})