// memorizzo il bottone
const buttonElement = document.querySelector("#button");

// memorizzo i campi di input
const inputAgeElement = document.querySelector("#userAge");
const inputDistanceElement = document.querySelector("#userDistance");

let ticketPrice = 0;
console.log("start " + ticketPrice);

// quando premo il bottone viene calcolato il prezzo del biglietto
buttonElement.addEventListener("click",
    function() {

        const userDistance = Number(inputDistanceElement.value);

        if(userDistance > 0 && Number(inputAgeElement.value) > 0) {

            ticketPrice = userDistance * 0.21; 
    
            if(Number(inputAgeElement.value) <= 17) {
                
                // se l'utente è minorenne
                ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
    
            } else if(Number(inputAgeElement.value) >= 65){
    
                // se l'utente è over 65
                ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
    
            }
            console.log("prezzo " + ticketPrice);
            document.getElementById("price").innerHTML = `Il prezzo del tuo biglietto è € ${ticketPrice.toFixed(2)}`;
            document.getElementById("error").innerHTML = "";

        } else {
            document.getElementById("error").innerHTML = `Valori inseriti non corretti`;
            document.getElementById("price").innerHTML = "";
        }
        
    }
)






