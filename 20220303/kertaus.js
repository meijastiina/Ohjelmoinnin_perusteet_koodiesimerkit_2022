/**
 * Funktio joka laskee yhteen syöteparametrina saatavat kaksi lukua
 * @param {Number} luku1 Yhteenlaskettava operandi
 * @param {Number} luku2 Yhteenlaskettava operandi
 */
function laskeKaksiLukuaYhteen(luku1, luku2) {
    // funktion toiminnallisuus, koodi
}

function laskeKaksiLukuaYhteen2(luku1, luku2) {
    // funktion toiminnallisuus, koodi
}

/** @type {HTMLInputElement} */
let inputElement = document.getElementById("input");
// Tulostetaan Input-elementin sisältö näytölle
let printElement = document.getElementById("printHere");
// Input-elementin sisältö on muuttunut
inputElement.onchange = function() {
    // Luetaan input-kentän sisältö
    let merkkijono = inputElement.value;
    
    printElement.innerHTML = merkkijono;
    // Tulostetaan Input-elementin sisällön pituus näytölle
    let lengthOfInput = merkkijono.length;
    printElement.innerHTML += "<br>Merkkijonon pituus on " + lengthOfInput;
    // JOS merkkijono lyhyempi kuin 5 merkkiä TAI merkkijono alkaa *-merkillä
    if ( lengthOfInput < 5 || merkkijono[0] ===  "*" ) {
        // Tulosta virheilmoitus 
        printElement.innerHTML += "<br>Merkkijonon pituus ei ole riittävä tai merkkijono alkaa *-merkillä";
    } else {
    // MUUTEN
        // Tulosta merkkijonon viides kirjain
        printElement.innerHTML += "<br>Merkkijonon viides kirjain on " + merkkijono.substring(4,5);
    }
    // Tulosta merkkijonon jokainen kirjain omalle rivilleen
    for ( let i = 0; i < merkkijono.length; i++) {
        printElement.innerHTML += "<br>" + merkkijono[i];
    }
    // Tulosta merkkijonon käänteisessä järjestyksessä jokainen kirjain omalle rivilleen
    // 0123456789
    // Merkkijono
    for ( let i = merkkijono.length - 1; i >= 0 ; i--) {
        printElement.innerHTML += "<br>" + merkkijono[i];
    }

}


/*T2: Joker - function t02()
Luo paikallinen taulukko jokerinumeroille käyttäen lausetta let jokers = new Array();
Käytä satunnaislukugeneraattorifunktiota ja luo 7 numeroa taulukkoon väliltä 0 … 9 (for-toisto).
Tämän jälkeen kirjoita toinen for-toisto, jossa käyt läpi jokers-taulukon ensimmäisestä viimeiseen,
tulostat jokaisen taulukkoalkion ja välilyönnin numeroiden väliin.*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Luo paikallinen taulukko jokerinumeroille käyttäen lausetta let jokers = new Array();
let jokers = new Array();

//luo 7 numeroa taulukkoon
for ( let i = 0; i < 7; i++ ) {
    // arvo satunnaislukuja väliltä 0-9
    let randomNumber = getRndInteger(0, 9);
    // lisää arvottu numero taulukkoon
    jokers.push(randomNumber);
}
// for-toisto, jossa käyt läpi jokers-taulukon ensimmäisestä viimeiseen,
for ( let i = 0; i < jokers.length; i++ ) {
    // tulostat jokaisen taulukkoalkion ja välilyönnin numeroiden väliin.
    printElement.innerHTML += " " + jokers[i]; 
}
printElement.innerHTML += "<br>";
// Tulosta luvut 5-10
for ( let i = 5; i <= 10; i++) {
    printElement.innerHTML += " " + i; 
}
