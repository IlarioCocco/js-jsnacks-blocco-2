// esercizio 3

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// lista nomi 
var nomi = ["Ilario", "Mario", "Dario"];
alert(nomi);
// lista cognomi
var cognomi = ["Giallo", "Verde", "Rosso"];
alert(cognomi);
// falsa lista
var falsaLista= [];
alert(falsaLista);


for (var i = 0; i < 3; i++) {
    var nomiCasuali = Math.floor(Math.random() * nomi.length);
    console.log(nomi);
    var cognomiCasuali = Math.floor(Math.random() * 3);
    console.log(cognomi);
    if (nomi.lenght == nomiCasuali)
        console.log(nomi);
}
