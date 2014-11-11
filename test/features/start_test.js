process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User visits start', function() {

  var browser;

  before(function(){
    this.server = server.listen(1337);
    browser = new Browser({ site: 'http://localhost:1337' });
  });

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('visits the page', function() {
    expect(browser.success).to.be.true;
  });

  it('can see the start button', function() {
    expect(browser.text('button')).to.equal('Start');
  });

  it('clicks button and sees how many users are connected', function() {
    browser.pressButton('Start', function() {
      console.log('HEY')
      expect(browser.text('var')).to.equal('1')  
    });
  });

});

