// Scrivere un codice in Javascript che mistampi in console se, partendo dal giornodella settimana “Lunedì” che è il 1° delmese, devo mangiare una delle mie 5 mele.
// Le mele a disposizione sono 5, ne devomangiare 1 ogni giorno ma non vogliomangiarla se è Mercoledì e devo smetteredi mangiarle quando me ne rimangono 2.

// INIZIO

const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

var meleRimanenti = 5;

for (i = 0; i < giorniSettimana.length-1; i++) {
    console.log(giorniSettimana[i] + " " + (i+1));
    console.log("Ho " + meleRimanenti + " mele");

    if (giorniSettimana[i] == "Mercoledì") {
        console.log("Oggi non ho voglia di mela");
    } else if (meleRimanenti>2) {
        console.log("Mangio una mela");
        meleRimanenti--;
    } else {
        console.log("Da oggi non posso mangiare mele");
        break;
        }


console.log("Mi rimangono " + meleRimanenti + " mele");
console.log ("----------"); 
}

// FINE

// commenti salvati 

