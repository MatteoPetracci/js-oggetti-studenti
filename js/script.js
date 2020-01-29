// // Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function () {
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

  var student = {
    'nome': 'Matteo',
    'cognome': 'Petracci',
    'eta': '27'
  }

  console.log(student);

  // Stampare a schermo attraverso il for in tutte le proprietà.

  for (var key in student) {
    console.log(student[key]);
  }

  // Creare un array di oggetti di studenti.

  var students = [
    {
      'nome': 'Matteo',
      'cognome': 'Petracci',
      'eta': '27'
    },
    {
      'nome': 'Mario',
      'cognome': 'Rossi',
      'eta': '35'
    },
    {
      'nome': 'Luca',
      'cognome': 'Bianchi',
      'eta': '60'
    }
  ];

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var newStudent = {
      "nome" : prompt("Nome"),
      "cognome" : prompt("Cognome"),
      "eta" : parseInt(prompt("eta"))
    }
    console.log(newStudent);
    students.push(newStudent);
    console.log(students);

  // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  for (var i = 0; i < students.length; i++) {
    var listStudents = students[i];
    
    console.log(listStudents);
    console.log(students[i].nome);
    console.log(students[i].cognome);

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var html = template(listStudents);
    $(".flex_item").append(html);

    var source = $("#template").html();
    var template = Handlebars.compile(source);

    var html = template(listStudents);
    $(".eta").append(html);
  }

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  // var newStudent = {
  //     "nome" : prompt("Nome"),
  //     "cognome" : prompt("Cognome"),
  //     "eta" : parseInt(prompt("eta"))
  //   }
  //   console.log(newStudent);
  //   students.push(newStudent);
  //   console.log(students);
});
