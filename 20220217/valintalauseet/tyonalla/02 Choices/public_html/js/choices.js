/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function v01() {
    // Check age based on given year
    /**
    * @type HTMLInputElement
    */

    // Hae syntymävuosi syötekentästä
    let birthYear = document.getElementById("year").value;
    // Hae kuluva vuosi
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear(); 
    // Laske ikä syntymävuoden ja kuluvan vuoden perusteella
    let age = currentYear - birthYear;
    // Tarkista onko ikä 18 tai yli
    if ( age == 30 ) {
        // Ikä on 30 -> tulosta jotain muuta
        document.getElementById("allow").innerHTML = " Kolmikymppinen!";
    } else if ( age >= 18 ) {
        // Ikä on 18 -> pääsee sisään, tulosta
        document.getElementById("allow").innerHTML = " Welcome!";
    } else {
        // ei ole -> ei pääse sisään, tulosta
        document.getElementById("allow").innerHTML = " too young";
    }
}

function v02() {
}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."
    
}

/*
V4: Square or rectangle - function v04()
Lue kaksi lukua (side1, side2). Tutki voiko niistä muodostaa neliön vai suorakaiteen. Käytä
funktioon määriteltyjä vakioita tuloksen ilmoittamiseen (elementtiin square). 
*/
function v04() {
    const REC = "rectangle";
    const SQ = "square";

    // Lue side1 muuttujaan
    let side1 = document.getElementById("side1").value;
    // Lue side2 muuttujaan
    let side2 = document.getElementById("side2").value;
    // Onko side1 ja side2 sama
    if ( side1 == side2 ) {
        // -> neliö
        document.getElementById("square").innerHTML = "square";
    } else {
    // Ei oo
        // -> suorakaide 
        document.getElementById("square").innerHTML = "rectangle";
    }
}

/* Lue luku (number3) ja päättele onko se pariton vai parillinen. Ota esille jakojäännös, kun luku jaetaan
2:lla. Mikäli jakojäännös on nolla, niin luku on parillinen (even). Käytä funktioon määriteltyjä vakioita
tuloksen ilmoittamiseen (elementtiin even). */
function v05() {
    const EVEN = "even";
    const ODD = "odd";

}

/* Lue luku (number3) ja päättele onko se positiivinen, negatiivinen vai nolla.*/
function v06() {
}

/* Lue neljä lukua (digit_a, digit_b, digit_c, digit_d). Etsi pienin ja suurin niistä. Määrittele
muuttujat smallest ja biggest. Logiikka pienimmän löytämiseen:
1. Aseta muuttujan digit_a sisöltö muuttujan smallest sisällöksi.
2. Tutki onko muuttuja digit_b pienempi kuin smallest. Jos on, aseta digit_b muuttujan smallest
sisällöksi.
3. Tutki onko muuttuja digit_c pienempi kuin smallest. Jos on, aseta digit_c muuttujan smallest
sisällöksi.
4. Tutki onko muuttuja digit_d pienempi kuin smallest. Jos on, aseta digit_d muuttujan smallest
sisällöksi.
5. Muuttujassa smallest on pienin arvo.
Vastaavalla logiikalla löydät suurimman.
Tulosta tulos elementteihin smallest ja biggest. Tässä tehtävässä ei käytetä &&-operaattoria iflauseen ehdoissa. */
function v07() {

}

/*Tutki onko vuosi (yearx) karkausvuosi vai ei. Tulosta tulos 'is leap year' tai 'is not leap year'
elementtin leap_year.
Vuosi on karkausvuosi, jos se on jaollinen 4:llä (ei jakojäännöstä). Tässä tapauksessa mikäli vuosi on
jaollinen 100:lla se on karkausvuosi, mikäli se on jaollinen myös 400:llä. Vuosi 1900 ei ole
karkausvuosi, 2000 on. 2020 on karkausvuosi, 2019 ja 2018 eivät ole.*/
function v08() {
    let year = document.getElementById("yearx").value;
    // Onko vuosi jaollinen neljällä
    if ( year % 4 == 0 ) {
        // -> on: tee lisätarkastuksia
        // Onko vuosi jaollinen sadalla
        if ( year % 100 == 0 ) {
            // -> ei: karkausvuosi
            // -> on: tee lisätarkastuksia
            // Onko vuosi jaollinen 400:lla
                // -> ei: tavallinen vuosi
                // -> on: karkausvuosi 
    } else {
        // -> ei: tavallinen vuosi
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }   
}

/* Tutki, onko käyttäjän syöttämä luku jaollinen 3:lla. Mikäli näin on tulosta vakion FLOWER1 sisältö
flower-elementtiin, muussa tapauksessa tulosta vakion FLOWER2 sisältö.
Edelleen tutki onko käyttäjän syöttämä luku suurempi kuin 10. Mikäli näin on tulosta vakion
FLOWER3 sisältö flower-elementtiin edellisen tulostuksen perään, muussa tapauksessa tulosta
vakion FLOWER4 sisältö edellisen tulostuksen perään. */
function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
	const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  


}
