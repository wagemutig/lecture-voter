process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User visits start', function() {

  var browser;
  before(function(){
    browser = new Browser({site: '127.0.0.1:1337'});  	
  });

  beforeEach(function(done) {
  	browser.visit('/', done);
  });

  it('can see the start button', function() {
    expect(browser.text('button')).to.eql('Start');
  });

});

