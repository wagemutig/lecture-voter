$(document).ready(function() {
  var connection = io.connect('192.168.50.141')
  console.log(connection)
  var view = new Interface(connection)
  $('a').click(function(e){
    view.emitMessage(e)
  })
})