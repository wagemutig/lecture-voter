process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User visits start', function() {

  var browser;

  before(function() {
    browser = new Browser({site: '127.0.0.1:1337'});  	
    user2 = new Browser({site: '127.0.0.1:1337'});
  }); 

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('after clicking the start button user goes to the vote page and sees how many users are connected', function() {
  		browser.pressButton('Start', function() {
  			expect(browser.location.pathname).to.eql('/vote')
  			expect(browser.text('p').to.eql("1 users connected"));
  	});
  });

  xit('sees when a second user is connected', function() {
    
      user2.pressButton('Start', function() {
        expect(user2.location.pathname).to.eql('/vote')
        expect(user2.text('p').to.eql("2 users connected")); 
    });
  });

});

