// WS1 vastaukset

/*
    1. document.write - Ensimmäinen tehtäväsi on klassinen Hello world, jonka ideana on saada kirjoitettua sivulle jotakin JavaScriptin avulla.
Älä välitä vielä mihin kohtaan sivulla teksti tulee, vaan kokeile metodia document.write ja kirjoita jotain sivulle.
*/
document.write("Heipähei");
/**
 * 2. alert - Kokeillaan seuraavaksi tervehtimistä vähän eri tavalla, viestiboksin kautta.
Kokeile näyttää sivulla viesti alert-metodin avulla.
 * 
 */
//alert("tässäpä tämä");

/*
3. document.getElementById - Viestin kirjoittaminen haluttuun elementtiin sivulla.
Jotta voisit hallita sivullasi olevia HTML-elementtejä tarvitset JavaScript DOM:a (Document Object Model). Yksinkertaisimmillaan voit käyttää HTML-elementin ID-attribuuttia elementin käsittelyyn.

document.getElementById-metodilla voit viitata tietyn ID:n omaavaan elementtiin. innerHTML-ominaisuudella voit määrittää mitä elementin sisälle tulee.
Kokeile kirjoittaa jotakin allaolevaan laatikkoon.
*/
document.getElementById("write-here").innerHTML = "Testiteksti boksiin"; // Muista lainausmerkit!

/*
4. Lukeminen
Kokeillaan seuraavaksi arvon lukemista elementiltä.

Kokeile kirjoittaa allaolevaan laatikkoon henkilön syötekenttien mukainen nimi ja ikä sopiviin kohtiin.

Huom! Ei tarvitse tässä vaiheessa vielä toteuttaa niin, että päivittyisivät arvojen muuttuessa, vaan riittää, että osaat lukea HTML:ssä syötetyt tiedot.
*/

document.getElementById("firstname").innerHTML = document.getElementById("firstname-input").value;

document.getElementById("lastname").innerHTML = document.getElementById("lastname-input").value;

document.getElementById("age").innerHTML = document.getElementById("age-input").value;

/*
5. setAttribute & style - Ominaisuuksien vaihtaminen
Vaihdetaan sitten elementin attribuutin arvoa. Muuta allaoleva linkki ohjaamaan SeAMK:n sivulle.

Vaihda linkin fontin väriksi musta, taustaväriksi punainen ja lihavoi fontti.
*/

document.getElementById("box").href = "http://www.oamk.fi";
// Fontin väriksi musta
document.getElementById("box").style.color = "black";
// Taustaväriksi punainen
document.getElementById("box").style.backgroundColor = "red";
// Lihavoi fontti
document.getElementById("box").style.fontWeight = "bold";

document.getElementById("box").setAttribute("style", "color: black; background-color: red; font-weight: bold;" );