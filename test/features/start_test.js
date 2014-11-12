process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('First user visits homepage', function() {

  var browser;

  before(function(){
    this.server = server.listen(1337);
    browser = new Browser({site: '127.0.0.1:1337'});  	
  });

 beforeEach(function(done) {
  browser.visit('/', done);
 });


  it('can see the start button', function() {
    expect(browser.text('button')).to.equal('Start');

  });

  it('can click start button and go to the vote page', function() {
      browser.pressButton('Start');
      expect(browser.location.pathname).to.equal('/vote');  
  });


});

