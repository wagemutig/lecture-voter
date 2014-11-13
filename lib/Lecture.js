function Lecture() {
	this.voters = [];
	this.totalVotes = 0;
};

Lecture.prototype.addVoter = function(voter) {
	this.voters.push(voter);
};

Lecture.prototype.removeVoter = function(voter) {
  var here = this.voters.indexOf(voter)
  if(here !== -1) this.voters.splice(here,1) 
};

Lecture.prototype.countVoters = function() {
  return this.voters.length
};

Lecture.prototype.updateTotalVotes = function(number) {
  var newTotal = this.totalVotes += number;
  if(newTotal > 50) {this.totalVotes = 50};
  if(newTotal < -50) {this.totalVotes = -50}; 
};

module.exports = Lecture