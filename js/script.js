// 1. Richiesta distanza tragitto
var distanzaKm = parseFloat(prompt("Inserisci la distanza del tragitto"));
// 2. Richiesta età passegero
var eta = parseInt(prompt("Inserisci la tua età: "));
// 3. Calcolo del prezzo del biglietto 
var prezzo = distanzaKm * 0.21;
if (eta < 18) {
    var prezzo = prezzo - (prezzo * 0.2);
} 
if (eta > 65) {
    var prezzo = prezzo - (prezzo * 0.4);
}
console.log(prezzo);
// 4. Stampo all'utente il risultato
