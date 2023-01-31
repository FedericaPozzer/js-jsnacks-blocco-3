// console.log("Ciao Kikka")

// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// Fai inserire un numero, che chiameremo N, all'utente.
let user_number = parseInt(prompt("inserisci un numero intero"));

while (isNaN(user_number)) {
    alert("il valore inserito non è un numero");
}


// per 0 a N volte (potevo usare facilmente il for!!)
let i = 0;
while (i < user_number) {
    // creo un array
    const array_creato = [];
    
    // PER 0 a 10 volte
    let y = 0;
    while (y < 10) {
        // genero un numero casuale da 0 a 100
        const random_number = Math.floor(Math.random() * 100) + 1;
        // inserisco il numero casuale nell'array
        array_creato.push(random_number);

        //incremento
        y++
    }

    // stampo l'array
    console.log(array_creato);

    //incremento
    i++;
}


