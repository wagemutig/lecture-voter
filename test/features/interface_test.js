process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User can vote', function() {

  var browser;
  before(function() {
    browser = new Browser({site: '127.0.0.1:1337'});
  });

  beforeEach(function(done) {
    browser.visit('/vote', done);
  });

  it('by using the plus button', function() {
    expect(browser.text('a#plus')).to.eql('+');
  });

  it('by using the minus button', function() {
    expect(browser.text('a#minus')).to.eql('-');
  });

});
