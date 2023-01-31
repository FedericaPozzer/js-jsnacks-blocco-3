// console.log("Ciao Kikka")

// Snack4 (Bonus)
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.


// chiedo un numero1 all'utente
let numero1 = parseInt(prompt("inserisci un numero intero"));
console.log(numero1);

// chiedo all'utente altro numero2
let numero2 = parseInt(prompt("inserisci un altro numero intero"));
console.log(numero2);

// creo un array in cui stampare tutti i numeri
const tutti_i_numeri = [ numero1, numero2];

// FINCHE' numero2 è maggiore di numero1
while (numero2 > numero1) {

    // numero2 diventa numero1
    numero1 = numero2;

    // chiedo altro numero3, che diventa il numero2
    numero2 = parseInt(prompt("inserisci un terzo numero intero"));
    console.log(numero2);

    // pusho il nuovo numero (3 che è diventato 2) nell'array
    tutti_i_numeri.push(numero2);
}

// alla fine stampali tutti
console.log(tutti_i_numeri);
