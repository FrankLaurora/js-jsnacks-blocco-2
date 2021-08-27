// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var num = parseInt(prompt("Inserisci un numero."));

while (isNaN(num)) {
    num = parseInt(prompt("Attenzione! Devi inserire un numero."))
}

if (num % 2 == 0) {
    console.log(num);
} else {
    console.log(num + 1);
}