"strict"
var Interface = require('../lib/Interface');

describe('The Interface', function() {
  
  var interface

  beforeEach(function(){
    interface = new Interface
  });

  it('a userVote value set to 0', function(){
    expect(interface.userVote).toEqual(0)
  });

});