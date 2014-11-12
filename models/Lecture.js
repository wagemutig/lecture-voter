function Lecture() {
	this.voters = [];
};

Lecture.prototype.addVoter = function(voter) {
	this.voters.push(voter);
};

module.exports = Lecture