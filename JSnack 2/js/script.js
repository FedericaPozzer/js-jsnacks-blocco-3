// console.log("Ciao Kikka")

// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.



const my_array = [];

let sum = 0;

while (sum < 50)  {

    let user_number = parseInt(prompt("inserisci un numero intero"));
    my_array.push(user_number);
    console.log(my_array);

    sum += user_number;
    console.log("fino a questo momento, la somma dei numeri è: " + sum);

    if (isNaN(user_number)){
        alert("il valore inserito non è un numero");
    };

    // sum > 50; --non serve :D (la condizione iniziale ha già "un finale"!).
}

    console.log("la somma risulta essere maggiore o unguale a 50, fine ciclo!");





