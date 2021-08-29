// esercizio 5

// Crea due array che hanno un numero di elementi diversi.
var elementiUno= ["rosso", 1, "giallo"];
var elementiDue=  ["verde", 3, "blu", 4, "bianco"];
console.log(elementiUno);
console.log(elementiDue);

// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
for (var i= 0; i <4 ; i++){
    var aggiuntaElmRandom = Math.floor(Math.random() * 4);
    elementiUno.push(aggiuntaElmRandom);
    console.log(aggiuntaElmRandom);
    if (elementiUno.length > elementiDue.length) {
    alert("modifica array ok");
    }
}




