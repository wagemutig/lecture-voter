process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

//These tests only pass if the canvas is disabled

describe('User can', function() {
  this.timeout(15000)

  var browser;
  before(function() {
    this.server = server.listen(1337);
    browser = new Browser({site: '127.0.0.1:1337'});
  });

  beforeEach(function(done) {
    browser.visit('/vote', done);
  });

  it('see happy button', function() {
    expect(browser.html('#plus')).to.contain('</a>');
  });

  it('see sad button', function() {
    expect(browser.html('#minus')).to.contain('</a>');
  });

});


describe('user can vote', function() {
  this.timeout(15000)

  before(function() {
    this.server = server.listen(1337);
    browser = new Browser({site: '127.0.0.1:1337'});
  });

  beforeEach(function(done) {
    browser.visit('/vote', done);
  });


  it('down', function() {
    browser.clickLink('#minus', function() {
      expect(browser.text('#mood')).to.equal('Mood: -1');
    });
  });


  it('up', function() {
    browser.clickLink('#plus', function() {
      expect(browser.text('#mood')).to.equal('Mood: 1');
    });
  });
});



