// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(function() {
  $(document).on('click', '#button', function() {
    var input = $('.send').val();
    console.log(input);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text': input,
      'sendReceived' : 'sent'
   };
    var html = template(context);
    console.log(html);
    $('.container').append(html);

    setTimeout(function() {
      var reply = 'Va bene';
      var source = $('#entry').html();
      var template = Handlebars.compile(source);

      var context = {
        'text': reply,
        'sendReceived' : 'received'
     };
      var html = template(context);
      console.log(html);
      $('.container').append(html);
    }, 1000);
  });
});
