// esercizio 2

// inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

for (var i= 0; i<7; i++){
    var inserisciNumero = parseInt(prompt("inserisci un Numero"));
    if(inserisciNumero % 2 == 0)
        console.log(inserisciNumero);
    else {
        console.log(inserisciNumero + 1);
    }
}