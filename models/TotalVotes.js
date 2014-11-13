function TotalVotes(){
  this.value = 0
}

TotalVotes.prototype.changeBy = function(vote) {
  this.value += vote
};

module.exports = TotalVotes;