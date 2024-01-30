// memorizzo il bottone
const buttonElement = document.querySelector("#button");

// memorizzo i campi di input
const inputAgeElement = document.querySelector("#userAge");
const inputDistanceElement = document.querySelector("#userDistance");
console.log(inputAgeElement.value);


let ticketPrice = 0;
console.log("start " + ticketPrice);

// quando premo il bottone viene calcolato il prezzo del biglietto
buttonElement.addEventListener("click",
    function() {
        const userDistance = inputDistanceElement.value;
        console.log("distanza: " + userDistance);
        ticketPrice = userDistance * 0.21;
        console.log("prezzo " + ticketPrice);
        if(Number(inputAgeElement.value) <= 17) {
            // se l'utente è minorenne
            ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
            console.log("minorenne " + ticketPrice);
        } else if(Number(inputAgeElement.value) >= 65){
            // se l'utente è over 65
            ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
            console.log("over 65 " + ticketPrice);
        }
        document.getElementById("price").innerHTML = `Il prezzo del tuo biglietto è € ${ticketPrice}`;
    }
)






