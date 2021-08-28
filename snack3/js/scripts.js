// esercizio 3

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// lista nomi 
nomi = ["Ilario", "Mario", "Dario"];
alert(nomi);
// lista cognomi
cognomi = ["Giallo", "Verde", "Rosso"];
alert(cognomi);

var nomiCasuali = (Math.floor(Math.random) * 3);
console.log(nomi);
var cognomiCasuali = (Math.floor(Math.random) * 3);
console.log(cognomi);

for (var i = 0; i < 3; i++) {
    if (nomi.lenght == nomiCasuali)
        console.log(nomi);
}
