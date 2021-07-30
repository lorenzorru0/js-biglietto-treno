function calcoloPrezzo() {
    // 1. Richiesta distanza tragitto
    var distanzaKm = parseInt(document.getElementById("distanzaKm").value);
    // 2. Richiesta età passegero
    var eta = parseInt(document.getElementById("eta").value);
    // 3. Calcolo del prezzo del biglietto 
    if (!isNaN(distanzaKm) && !isNaN(eta)) {
        var prezzo = distanzaKm * 0.21;
        if (eta < 18) {
            prezzo -= (prezzo * 0.2);
            document.getElementById('sconto').innerHTML = "Sconto del 20% per i minori di 18 anni";
        } else if (eta > 65) {
            prezzo -= (prezzo * 0.4);
            document.getElementById('sconto').innerHTML = "Sconto del 40% per le persone sopra i 65 anni";
        } else {
            document.getElementById('sconto').innerHTML = "Nessuno sconto applicato";
        }
        console.log(prezzo);
        // 4. Stampo all'utente il risultato
        document.getElementById('distanzaKmP').innerHTML = distanzaKm;
        document.getElementById('etaP').innerHTML = eta;
        document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + "€";
    } else {
        document.getElementById('alertNan').innerHTML = "-- Errore, ricarica la pagina e correggi i dati --";
    }
}
