var Voter = require('../lib/Voter');

describe("Voter", function() {

  var voter

  beforeEach(function(){
    voter = new Voter;
  });

  it("can have a data", function() {
    expect(voter.data).toEqual([]);
  });

  it("can add to data", function() {
    voter.addVote('timestamp', 'vote')
    expect(voter.data).toEqual([{timestamp: "timestamp", vote: "vote"}]);
  });

  it("can add lots of data", function() {
    voter.addVote('timestamp', 'vote')
    voter.addVote('timestamp2', 'vote2')
    expect(voter.data.length).toEqual(2)
  });

  it("can share the last vote added", function() {
    voter.addVote('timestamp', 'vote')
    voter.addVote('timestamp2', 'vote2')
    expect(voter.lastVote()).toEqual("vote2")
  });

});
