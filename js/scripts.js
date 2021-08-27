// il software deve chiedere per  5 volte di inserire un numero
var richiestaNumero= prompt("inserisci per 5 volte un numero")
console.log(richiestaNumero);
alert(richiestaNumero);

for (var i = 0; i < 5; i++) {
    var somma = prompt(richiestaNumero);
    console.log(somma);
}
