// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numList = [];

randomLenght = Math.floor((Math.random() * 50) + 1);

var i = 0 ;

while (i < randomLenght) {
    numList.push(Math.floor((Math.random() * 100) + 1));

    i++;
}

numSum = 0;

for (var i = 0; i < randomLenght; i++ ) {
    if( i % 2 != 0){
        numSum += numList[i];
    }
}

console.log(numList);
console.log(numSum);