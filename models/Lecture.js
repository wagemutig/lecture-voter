function Lecture() {
	this.voters = [];
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
}
module.exports = Lecture