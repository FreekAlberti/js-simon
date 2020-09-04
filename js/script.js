//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(function() {
  var list = [];
  for (var i = 0; i < 5; i++) {
    var numero = numRandom();
    list.push(numero);
  }
  alert(list);
});

function numRandom(){
  return Math.floor(Math.random()* 100);
};
