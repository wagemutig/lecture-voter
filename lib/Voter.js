function Voter(connection) {
  this.data = [];
  this.connection = connection;
};

Voter.prototype.addVote = function(timestamp, vote) {
  this.data.push({timestamp: timestamp, vote: vote})
};

Voter.prototype.lastVote = function() {
  return this.data[this.data.length-1].vote
};

// Voter.prototype.connect = function(connection) {
// 	this.connection = connection;
// };

module.exports = Voter;