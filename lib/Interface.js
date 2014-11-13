function Interface(connection) {
  this.userVote = 0
  this.plus = 'plus'
  this.minus = 'minus'
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
module.exports = Interface
