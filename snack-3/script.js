// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var firstName = ["Donald", "Mickey", "Scrooge", "Goofy"];

var lastName = ["Duck", "Mouse", "McDuck", "Pippo"];

var mockUpNames = [];

for (var i = 1; i <= 3; i++) {
    mockUpNames.push(firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)]);
}

console.log(mockUpNames);