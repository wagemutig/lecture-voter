"strict"
var ButtonView = require('../lib/ButtonView');

describe('The ButtonView', function() {
  
  var buttonView = new ButtonView('<main></main>')

  it('attaches to the main tag', function(){
    expect(buttonView.element).toEqual('<main></main>')
  });

  it('can attach a method to a button', function(){
    
  })

});