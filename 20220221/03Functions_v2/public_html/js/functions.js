/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1;
/**
 * What is selected, circle or square?
 * @param {number} i    1 = circle, 2 = square
 */
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

/**
 * Print result on the page
 * @param {element} place   where to print
 * @param {string} shape    shape as text
 * @param {number} area     area of the shape
 * @param {number} around   around of the shape
 */
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

/**
 * Calculate circle around
 * @param {number} r    radius of a circle
 * @returns {number}    around of a circle
 */
function calculateCircleAround (r) {
    
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle 
 */
function calculateCircleArea (r) {
    
}

// Write Square functions here


// Paste here the random number generator function 


// Button functions
/*
F1: Circle - function f01()
Lue säde (radius) input-elementistä (radius1). Laske ympyrän pinta-ala ja piiri. Tulosta tulokset
elementteihin c_around ja c_area. Pyöristä tulokset kokonaisluvuiksi tulostettaessa.
Ympyrän piiri lasketaan: 2 * PI * radius, Pin arvon saat Math-luokasta komennolla Math.PI.
Ympyrän pinta-ala lasketaan: PI * radius2. Potenssiin korottaminen tehdään Math-luokan
funktiolla Math.pow(number, power). Aseta sopiva muuttuja number-muuttujan paikalle (siis säde) ja power-muuttujan paika
*/
function f01() {           
    // Lue säde (radius) input-elementistä (radius1).
    let radius = Number(document.getElementById("radius1").value);

    // Ympyrän piiri lasketaan: 2 * PI * radius, Pin arvon saat Math-luokasta komennolla Math.PI.
    let circleAround = 2 * Math.PI * radius;

    // Tulosta tulokset elementteihin c_around 
    document.getElementById("c_around").innerHTML = circleAround;
    // ja c_area. 

}

/*
F2: Tasakylkinen kolmio (kolmiossa on kaksi samanpituista kylkeä) - function f02()
Laske ja tulosta tasakylkisen kolmion korkeus, pinta-ala ja ympärys, kun sivun ja kannan pituus on
tunnettu.
Tasakylkisessä kolmiossa sivut ovat yhtä pitkät. Kylki kuvassa on merkitty
c:llä. b on kolmion korkeus ja kannan pituus on 2*a.
Mikäli tiedetään kolmion kanta, niin a:n pituus saadaan kanta/2.
Jos tiedetään a ja b, niin c saadaan Pythagoraan lauseesta 𝑐 = √𝑎
2 + 𝑏
2
Tässä tehtävässä pitää ratkaista muuttuja b, joka lasketaan 𝑏 = √𝑐
2 − 𝑎
2
Kun tiedetään suorakulmaisen kolmion kanta ja korkeus, niin voidaan laskea
pinta-ala kaavalla, pinta-ala = (kanta * korkeus)/2
Pyöristä tulokset kokonaisluvuksi tulostettaessa.
*/
function f02() {

}

/*
F3: Circle 2 - function f03()
Etsi JavaScript-tiedostosta funktioiden calculateCircleAround ja calculateCircleArea rungot. Kirjoita
funktioihin lauseet, joilla lasketaa ympyrän piiri sekä pinta-ala parametrin r avulla ja palauta
laskutoimitusten tulos kutsuvalle.
Lue funktiossa f03 ympyrän säde ja laske piiri sekä pinta-ala juuri kirjoittamiesi funktioiden avulla.
Etsi JavaScript-tiedostosta funktio print. Käytä sitä tulostamisessa. Pyöristä tulokset kokonaisluvuksi
tulostamisen yhteydessä. Älä muuta print-funktiota. 
*/
function f03() {

//    how to find the element where to print and use it    
//    let p = document.getElementById('circle');
//    print(p, ...);    
}

/*
F4: Square - function f04()
Määrittele funktiot calculateSquareAround(s) ja calculateSquareArea(s). Kirjoita funktioihin lauseet,
joilla lasketaan neliön pinta-ala ja piiri perustuen parametrin s sisältöön.
Lue neliön sivun pituus ja laske pinta-ala sekä piiri juuri kirjoittamiesi funktioiden avulla.
Käytä funktiota print tulostamisessa. Ei ole tarvetta pyöristää tulostettavia arvoja.
*/
function f04() {
    
}

/*
F5: Circle or Square - function f05()
Etsi funktio shape(i) JavaScript-tiedostosta. Huomaa globaalimuuttuja whatShape. Tutki, miten
funktiota kutsutaan html-tiedostosta. Selvitä itsellesi, mitä tarkoittaa, kun muuttujalla whatShape on
arvo 1 tai 2.
Lue data radius/circle. Perustuen whatShape-muuttujan arvoon laske joko ympyrän tai neliön
tulokset. Käytä funktiota print tulostamisessa. Ympyrän tulokset pyöristetään kokonaisluvuksi, neliön
ei.
*/
function f05() {

}
/*
F6: Dice - function f06()
Perehdy funktioon Math.random()w3schools-sivustolla
https://www.w3schools.com/js/js_random.asp.
Monissa harjoituksissa sinun tulee arpoa luku halutulta lukuväliltä. Kopioi-ja-liitä satunnaisluvun
arpova funktio w3schoos-sivustolta. Kopioi funktio, joka arpoo satunnaisluvun halutulta
arvoalueelta siten, että parametreina annetaan arvoalueen ylä- ja alaraja (molemmat voivat tulla
arvotuksi). Etsi funktiot.js-tiedostosta paikka, johon satunnaisluvun arvontafunktion kirjoitat.
Löydät paikan lukemalla kommenttitekstejä.
Käytä funktiota simuloimaan nopan (dice) heittämistä. Nopassa on silmäluvut 1 … 6. Tulosta saatu
silmäluku html-sivulle.
*/
function f06() {

}

/*
F7: Random numbers - function f07()
Ohjelmoi funktioon satunnaislukujen arpominen käyttäjän ilmoittamalta arvoalueelta (min ja max).
Käytä edellisessä tehtävässä kirjoittamaasi funktiota. Tulosta kukin satunnaisluku elementtiin
randoms. Luvut erotetaan toisistaan välilyönnillä ” ”, kts. esimerkkitulostus.
*/
function f07() {

}

/* 
F8: User id - function f08()
Lue henkilön etu- ja sukunimi sekä muodosta niiden perusteella käyttäjätunnus ja salasana, kts.
esimerkkitulostus. Tässä tehtävässä käytettävää salasanan muodostamista ei oikeissa sovelluksissa
pidä käyttää.
Käyttäjätunnus: 'n' + kuluvan vuoden viimeinen numero + etunimen kaksi ensimmäistä kirjainta
pieninä kirjaimina + sukunimen kaksi ensimmäistä kirjainta pieninä kirjaimina + '00'
Salasana: '!?' + etunimen ensimmäinen kirjain pienenä kirjaimena + etunimen viimeinen kirjain isona
kirjaimena + sukunimen ensimmäinen kirjain pienenä kirjaimena + sukunimen viimeinen kirjain isona
kirjaimena + sukunimen toiseksi viimeinen kirjain isona kirjaimena + '+/' + kuluvan vuoden viimeinen
numero + 1
Muodosta käsin käyttäjätunnus ja salasana omaan nimesi perustuen. Kirjoita se kommenttina
funktioon.
Aluksi kirjoitat muutaman funktion. Katso kalvot ja videot saadaksesi vihjeitä kirjoittamiseen. Nämä
funktiot kirjoitetaan funktion f08 yläpuolelle.
Kirjoita funktio function getCharacter(text, index, uppercase) { … } Funktiossa otat
indeksin osoittaman kirjaimen text-muuttujasta. Mikäli uppercase-muttuujassa on arvo true >>
kirjain muutetaan isoksi kirjaimeksi, muutoin pieneksi kirjaimeksi. Kirjain palautetaan kutsuvalle.
Kirjoita funktio function getDigit() { … } Funktiossa luetaan ensin kuluva päiväys, otetaan
siitä vuosiluku, muutetaan vuosiluku merkkijonoksi ja lopuksi otetaan viimeinen merkki, joka
palautetaan kutsuvalle.
Tarvitset funktioissa seuraavia valmiita JavaScript-funktioita:
- muuttuja.charAt(index), https://www.w3schools.com/jsref/jsref_charat.asp.
Huomaa. Merkkijonon ensimmäisen merkin indeksi on nolla.
- charAt()-funktion sijaan voit käyttää myös taulukkomerkintää muuttuja[index]
- isoksi kirjaimeksi muunnos tehdään funktiolla muuttuja.toUpperCase()
https://www.w3schools.com/jsref/jsref_touppercase.asp
- pieneksi kirjaimeksi muunnos tehdään funktiolla muuttuja.toLowerCase()
https://www.w3schools.com/jsref/jsref_tolowercase.asp
- numeerinen tieto muunnetaan merkkitiedoksi funktiolla muuttuja.toString()
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Tämän jälkeen voit aloittaa käyttäjätunnuksen ja salasanan muodostamista.
Kirjoita ohjelmakoodi käyttäjätunnuksen muodostamiseksi:
- käytä funktiota getCharacter saadaksesi tarvittavat kirjaimet, ota jokainen kirjain omaan
muuttujaan, neljä muuttujaa
- käytä funktiota getDigit saadaksesi kuluvan vuoden viimeisen numeron muuttujaan
- muodosta käyttäjätunnus tehtävän alussa kerrotun säännön mukaisesti ja tulosta se
Oulu University of Applied Sciences JAVASCRIPT 4 (10)
Liisa Auer
Kirjoita ohjelmakoodi salasanan muodostamiseksi:
- viimeisen kirjaimen esillesaamiseksi tarvitset tiedon merkkijonon pituudesta, sen saat lengthominaisuudesta, https://www.w3schools.com/jsref/jsref_length_string.asp
- viimeinen kirjain merkkijonossa on paikassa length - 1, toiseksi viimeinen on paikassa length - 2
- käytä funktiota getCharacter ja ota tarvittavat kirjaimet eri muuttujiin
- lisää yksi kuluvan vuoden viimeiseen numeroon
- muodosta salasana tehtävän alussa kerrotun säännön mukaisesti ja tulosta se
*/
// Write getCharacter and getDigit functions here

function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name:  
    // last name: 
    // user id: 
    // password: 
    
    
}

/*F9: Check input data f09()
Tehtävässä lasketaan henkilön ikä ja onnen numero kirjoitetun päivämäärän perusteella. Aluksi
kirjoitat kaksi funktiota funktion f09() yläpuolelle.
Kirjoita funktio function checkDate(day, month, year) { … }. Funktiolla tarkistetaan, että
päivämäärä on oikein. Funktio palauttaa virhetekstin, jos päivämäärässä on virhe. Määrittele aluksi
funktiossa paikallinen muuttuja message ja sijoita siihen tyhjä merkkijono (””).
Sen jälkeen tarkistat, että day-muuttujassa on luku väliltä 1-31. Mikäli näin ei ole, niin messageen
sijoitetaan "Day must be 1-31." Seuraavaksi tarkistat, että month-muuttujassa on luku väliltä 1-12.
Mikäli näin ei ole, niin messageen sijoitetaan "Month must be 1-12." Lopuksi tarkistat, että yearmuuttujassa on luku väliltä 1900-kuluva vuosi. Mikäli näin ei ole, niin messageen sijoitetaan " Year
must be between 1900 and current year." Funktion viimeinen tehtävä on palauttaa messagemuuttuja kutsuvalle.
Kirjoita funktio function luckyNumber(day, month, year) { … }. Kirjoita ensimmäiseksi
funktioon vakio, joka sisältää onnennumerot const LUCKY = "2468013579"; Sen jälkeen lasket
yhteen päivän, kuukauden ja vuoden. Saatu luku jaetaan luvulla 10 ja otetaan talteen jakojäännös.
Jakojäännös osoittaa onnennumeroon em. LUCKY-vakiossa. Palauta saatu onnennumero kutsuvalle.
Sitten siirrytään kirjoittamaan funktiota f09(). Tyhjennä mahdolliset entiset tulosteet (check_error
ja check_result). Lue elementeistä dd, mm ja yy data numeerisena. Kutsu funktiota checkDate
ja ota talteen muuttujaan funktion palauttama viesti. Mikäli saatu viesti ei ole tyhjä merkkijono (””),
niin saatu viesti tulostetaan elementtiin check_error ja lopetetaan toiminta.
Kun päivämäärä on oikein, niin lasketaan ikä vuoden perusteella. Sen jälkeen kutsutaan funktiota
luckyNumber ja talletetaan muuttujaan funktion palauttama onnennumero.
Lopuksi tulostetaan elementtiin check_result oheinen teksti. Luonnollisesti luvut vaihtelevat
syötetyn päivämäärän mukaan. Rivinvaihto <br> on lauseiden välissä.*/
// Write checkDate and luckyNumber functions here

function f09() {

}
