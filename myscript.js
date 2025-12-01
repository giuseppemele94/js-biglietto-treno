// PROGRAMMA COSTO BIGLIETTO TRENO 
// Il programma chiede all'utente chilometri ed età 
// calcola il prezzo del biglietto in base ai km ed applica uno sconto 
// Prezzo base = 0.21 euro al km 
// Sconto 20 % per i minorenni 
// Sconto del 40% per gli over 65
//Output con max due cifre decimali 

// SETUP 
let basicPrice ; 
let discount ; 
let finalPrice ; 
let message ; 
const pricePerKm = 0.21; 

// INPUT 
const numberOfKm = parseFloat(prompt("Inserisci il numero di Km: ")); 
const age = parseInt(prompt("Inserisci la tua età: ")); 

// OUTPUT DATI INSERITI 
console.log("Kilometri da percorrere:", numberOfKm) ; 
console.log("Età passeggero:", age); 

// CALCOLO IL PREZZO BASE IN BASE ALL'INPUT 
basicPrice =  numberOfKm * pricePerKm ; 
console.log("Prezzo base:", basicPrice.toFixed(2) ,"€"); 

if(age < 18) {
    discount = basicPrice * 0.20 ; // sconto 
    finalPrice = basicPrice - discount ; // prezzo finale 
    message = "Ti è stato applicato uno sconto del 20% perché sei minorenne."; 
    //console.log("Prezzo scontato UNDER 18:",finalPrice.toFixed(2), "€"); 
}

else if (age > 65) {
    discount = basicPrice * 0.40;
    finalPrice = basicPrice - discount ;
    message = "Ti è stato applicato uno sconto del 40% perché hai più di 65 anni "; 
    //console.log("Prezzo scontato OVER 65:",finalPrice.toFixed(2), "€");
}

else {
    finalPrice = basicPrice; 
    message = "Prezzo pieno! Non rispetti i requisiti per poter ricevere lo sconto"; 
    //console.log("Prezzo finale:", finalPrice.toFixed(2), "€");
}

// STAMPO 
document.getElementById('ticket-price').innerHTML = 'Il prezzo del tuo biglietto è: ' + finalPrice.toFixed(2) + '€' + "<br> " +message;  



