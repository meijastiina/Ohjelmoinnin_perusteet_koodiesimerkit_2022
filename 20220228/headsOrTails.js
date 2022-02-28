function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/**L6: Heads or tails - function l06()
Kirjoita ohjelma, joka arpoo 1000 kertaa luvun 0 tai 1. Laske kuinka monta kertaa tuli 1 ja kuinka
monta kertaa 0. Tulosta jakauma. Tarvitset tässä muuttujat, joihin lasket yksi kerrallaan lukujen 0 ja
1 esiintymiset. Määrittele muuttujat ennen for-toistoa ja tulosta sisältö for-toiston jälkeen.
Kopioi myös tähän js-tiedostoon satunnaisluvun arvontafunktio, jota olet käyttänyt edellisissä
tehtävissäkin.  */

let printElement = document.getElementById("printHere");
// Luodaan muuttujat ykkösten ja nollien lukumäärälle
let numberOfOnes = 0;
let numberOfZeros = 0;
// Suorita arvonta 1000 kertaa
for (let i = 0; i < 1000; i++) {
    // Arvo luku 0 tai 1
    let randomNumber = getRndInteger(0, 1);
    printElement.innerHTML += randomNumber + "<br>";
    // Laske kuinka monta kertaa tuli 1 ja kuinka monta kertaa 0.
    // Tarkista arvottiinko 1 vai 0
    // JOS arvonnan tulos on 1
    if ( randomNumber == 1 ) {
        // kasvata ykkösten lukumäärää
        numberOfOnes++;
    } else {
        // kasvata nollien lukumäärää
        numberOfZeros++;
    }

} 
// Tulosta jakauma.
printElement.innerHTML += "Ykkösiä: " + numberOfOnes;
printElement.innerHTML += " Nollia: " + numberOfZeros;