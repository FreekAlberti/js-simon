//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(function() {
  myAlert = numAlert();
  setTimeout(invisible, 5000);
  setTimeout(function() {
    var numeriDaConfrontare = myPrompt();
    console.log(numeriDaConfrontare);
  }, 5100);
});

function numRandom(){
  return Math.floor(Math.random()* 100);
}

function numAlert(){
  var list = [];
  for (var i = 0; i < 5; i++) {
    var numero = numRandom();
    list.push(numero);
  }
  $(".visibile").text(list);
  return list;
}

function invisible() {
  $(".visibile").addClass("invisible");
}

function myPrompt() {
  var listaUtente = [];
  for (var i = 0; i < 5; i++) {
    var numUtente = parseInt(prompt("scrivi uno dei numeri che hai letto"));
    listaUtente.push(numUtente);
  }
  return listaUtente;
}
