function Interface() {
  this.userVote = 0
  this.plus = '#plus'
  this.minus = '#minus'
};
Interface.prototype.downVote = function(){
  this.userVote = -1 
}
Interface.prototype.upVote = function(){
  this.userVote = 1 
}
module.exports = Interface
