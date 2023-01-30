// console.log("Ciao Kikka")

// Snack1
// Ottieni un numero casuale in un range specificato. Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.


// CHIEDO ALL'UTENTE IL VALORE MINIMO
let min_number = parseInt(prompt("inserisci valore minimo"));
console.log(min_number);
// CHIEDO ALL'UTENTE IL VALORE MASSIMO
let max_number = parseInt(prompt("inserisci valore massimo"));
console.log(max_number);


// GENERO UN NUMERO COMPRESO TRA IL VALORE MINIMO E IL VALORE MASSIMO

// const random_number = Math.floor(Math.random() * 10) + 1;
const random_number = Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;

console.log(random_number);

while (isNaN(random_number)) {

    alert("Uno o più dei valori inseriti non sono validi, ricarica la pagina per riprovare!");
}

while (min_number >= max_number) {

    alert("Il valore massimo deve essere maggiore del valore minimo!");
}