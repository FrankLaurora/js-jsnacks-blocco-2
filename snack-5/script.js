// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var numList1 = [];
var numList2 = [];

do {
    randomLenght1 = Math.floor((Math.random() * 50) + 1);
    randomLenght2 = Math.floor((Math.random() * 50) + 1);
} while (randomLenght1 == randomLenght2)

console.log(randomLenght1);
console.log(randomLenght2);

for (var i = 0; i < randomLenght1; i++) {
    numList1.push(Math.floor((Math.random() * 100) + 1));
}

console.log(numList1);

for (var i = 0; i < randomLenght2; i++) {
    numList2.push(Math.floor((Math.random() * 100) + 1));
}

console.log(numList2);

if (numList1.length < numList2.length) {
    while (numList1.length < numList2.length) {
        numList1.push(Math.floor((Math.random() * 100) + 1));
    }
} else if (numList2.length < numList1.length) {
    while (numList2.length < numList1.length) {
        numList2.push(Math.floor((Math.random() * 100) + 1));
    }
}

console.log(numList1);

console.log(numList2);