//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(function() {
  listaComputer = listaNumComputer();
  setTimeout(function() {
    invisible();
    var listaUtente = listaNumUtente();
    var comuni = numComuni(listaUtente, listaComputer);
    alert("Hai indovinato " + comuni.length + " numeri: " + comuni);
  }, 5000);
});

//FUNZIONI

function numRandom(){
  return Math.floor(Math.random()* 100);
}

function listaNumComputer(){
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

function listaNumUtente() {
  var listaUtente = [];
  for (var i = 0; i < 5; i++) {
    var numUtente = parseInt(prompt("scrivi uno dei numeri che hai letto"));
    listaUtente.push(numUtente);
  }
  return listaUtente;
}

function numComuni(listA, listB) {
  var listASistemata = listA.concat().sort();
  var listBSistemata = listB.concat().sort();
  var comuni = [];
  var ai = 0;
  var bi = 0;
  while (ai < listA.length && bi < listB.length) {
    if (listASistemata[ai] === listBSistemata[bi]) {
      comuni.push(listASistemata[ai]);
      ai++;
      bi++;
    } else if(listASistemata[ai] < listBSistemata[bi]) {
      ai++;
    } else {
      bi++;
    }
  }
  return comuni;
}
