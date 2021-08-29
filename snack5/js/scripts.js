// esercizio 5

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
var elementiUno =["rosso", 1, "giallo"];
var elementiDue = ["verde", 3, "blu", 4, "bianco"];
console.log(elementiUno);
console.log(elementiDue);

var aggiuntaElm = (Math.floor(Math.random() * 3));
alert(aggiuntaElm)