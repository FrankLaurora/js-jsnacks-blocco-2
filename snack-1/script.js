// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
numSum = 0;

// for (var i = 1; i <= 5; i++) {
//     num = parseInt(prompt("inserisci un numero."));
//     numSum += num;
// }

var i = 1;

while (i <= 5) {
    num = parseInt(prompt("inserisci un numero."));
    numSum += num;
    i++;
}

console.log(numSum)