// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(function() {
  $('#button').click(function() {
    var input = $('.send').val();
    console.log(input);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text': input
    };
    var html = template(context);
    console.log(html);
  })
});
