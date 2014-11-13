function Interface(connection) {
  this.userVote = 0
  this.plus = 'plus'
  this.minus = '#minus'
  this.socket = connection
};
Interface.prototype.downVote = function(){
  return this.userVote = -1
}
Interface.prototype.upVote = function(){
  return this.userVote = 1  
}
Interface.prototype.emitMessage = function(e){
  if(e.target.id == this.plus)
    this.socket.emit('userVote', {userVote:this.upVote()})
  else
    this.socket.emit('userVote', {userVote:this.downVote()})
  return false;
}

$(document).ready(function() {

  var view = new Interface(io.connect('192.168.50.141'))
  var chart = new SmoothieChart({ grid: {fillStyle:'#ffffff',
                                  strokeStyle:'#ebebeb',
                                  sharpLines:true,},
                                  labels: {disabled:true},
                                  maxValue:55,minValue:-55})
  var votes = new TimeSeries()
  var line = {strokeStyle: '#979797', lineWidth:2}

  chart.streamTo(document.getElementById('chart'),1000)
  chart.addTimeSeries(votes, line)
  

  view.socket.on('graph update', function(data){
    votes.append(new Date().getTime(), data.totalVotes)
    $('samp').text(data.totalVotes)
  })

  view.socket.on('update voter count', function(data){
    $('var').text(data.countVoters)
  })
  
  $('a').click(function(e){view.emitMessage(e)})

})
