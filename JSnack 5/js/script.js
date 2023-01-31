// console.log("Ciao Kikka")

// Snack5 (Bonus #2)
// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.


const get_lucky = [];
let user_number;

const random_number = Math.floor(Math.random() * 100) + 1;
// console.log("numero computer: " + random_number);

do {
    user_number = parseInt(prompt("inserisci un numero da 1 a 100"));
    console.log("numero utente: " + user_number);

    get_lucky.push(user_number);

    if (user_number > random_number) {
        console.log("il tuo numero è maggiore di quello del computer");
    } else if (user_number < random_number) {
        console.log("il tuo numero è minore di quello del computer");
    }

} while (user_number != random_number);

console.log("Congratulazioni, il tuo numero è uguale a quello estratto dal computer! Ci hai messo solamente " + get_lucky.length + " tentativi!");
