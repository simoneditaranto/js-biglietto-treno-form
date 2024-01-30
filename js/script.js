// memorizzo il bottone
const buttonElement = document.querySelector("#button-calc");

// memorizzo i campi di input
const inputAgeElement = document.querySelector("#userAge");
const inputDistanceElement = document.querySelector("#userDistance");
const userNameElement = document.querySelector("#textName");

let ticketPrice = 0;
console.log("start " + ticketPrice);

// quando premo il bottone viene calcolato il prezzo del biglietto
buttonElement.addEventListener("click",
    function() {

        const userDistance = Number(inputDistanceElement.value);

        if(userDistance > 0 && Number(inputAgeElement.value) > 0) {

            ticketPrice = userDistance * 0.21;
            document.getElementById("ticket-type").innerHTML = "Biglietto Standard";
    
            if(Number(inputAgeElement.value) <= 17) {
                
                // se l'utente è minorenne
                ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
                document.getElementById("ticket-type").innerHTML = "Biglietto Young";
    
            } else if(Number(inputAgeElement.value) >= 65){
    
                // se l'utente è over 65
                ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
                document.getElementById("ticket-type").innerHTML = "Biglietto Over";
    
            }
            console.log("prezzo " + ticketPrice);
            document.getElementById("ticket-price").innerHTML = `${ticketPrice.toFixed(2)} €`;
            document.getElementById("userName").innerHTML = userNameElement.value;

        } else {
            document.getElementById("ticket-price").innerHTML = "I valori inseriti non sono corretti";
            document.getElementById("userName").innerHTML = " ";
        }
        
    }
)






