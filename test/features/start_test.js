process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User visits start', function() {

  var browser;

  before(function() {
    browser = new Browser({site: '127.0.0.1:1337'});  	
  }); 

  it('can see the start button', function() {
    browser.visit('/', function() {
    	expect(browser.text('button')).to.eql('Start');
    });
  });

  it('after clicking the start button user goes to the vote page and sees how many users are connected', function() {
  	browser.visit('/', function(){	
  		browser.clickButton('Start', function() {
  			expect(browser.location.pathname).to.eql('/vote')
  			expect(browser.text('p').to.eql("1 users connected"));
  		});
  	});
  });

});

