// // Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var student = {
  'nome': 'Matteo',
  'cognome': 'Petracci',
  'eta': '27'
}

console.log(student);

for (var key in student) {
  console.log(student[key]);
}
