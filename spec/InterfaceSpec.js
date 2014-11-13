"strict"
var Interface = require('../lib/Interface');
//var io = require('socket.io-client')

describe('The Interface', function() {
  
  var interface

  beforeEach(function(){
    var connection = {"emit":function(){return 1}}
    interface = new Interface(connection)
  });

  it('a userVote value set to 0', function(){
    expect(interface.userVote).toEqual(0)
  });

  it('has a plus button', function(){
    expect(interface.plus).toEqual('plus')
  })

  it('has a minus button', function(){
    expect(interface.minus).toEqual('#minus')
  })

  it('you can down the userVote value', function(){
    interface.downVote()
    expect(interface.userVote).toEqual(-1)
  })

  it('you can up the userVote value', function(){
    interface.upVote()
    expect(interface.userVote).toEqual(1)
  })
   
  it('emits 1 on a plus click', function(){
    var e = {"target":{"id":"plus"}} 
    var click = interface.emitMessage(e)
    expect(click).toEqual(false)
  })

});

