/*

Lue henkilötunnus ja ohjelmoi seuraavat tarkistukset, jotta voit olla varma, että henkilötunnuksessa
on oikea määrä ja oikeanlaisia merkkejä. Jos mikä tahansa seuraavista tarkistuksista kertoo, että
henkilötunnus on väärin, niin sopiva virheilmoitus esitetään ja lopetetaan ohjelman suoritus
virheeseen.
1. Henkilötunnuksen pituus täytyy olla 11 merkkiä. variable.length
Id code must have 11 characters.
2. Erota ensimmäiset 6 merkkiä muuttujaan ja tarkista, että niistä voidaan muodostaa luku.
isNaN(variable)
Id code must have 6 numbers at first.
3. Erota vuosisatamerkki ja tarkista, että se on +, - or A. variable !== '+' && …
The century mark must be +, - or A.
4. Erota järjestysnumero muuttujaan ja ja tarkista, että siitä voidaan muodostaa luku.
isNaN(variable)
Order number must be a number.
Tässä kohtaa sinun pitäisi varmistaa, että painikefunktion alussa tyhjennät kaikki tulostuselementit.
*/
const ID_CODE_LENGTH = 11;
let idCode = "120589-456A";

// 1. Henkilötunnuksen pituus täytyy olla 11 merkkiä. variable.length Id code must have 11 characters.
if ( idCode.length == ID_CODE_LENGTH ) {
    // pituus ok
}

// 2. Erota ensimmäiset 6 merkkiä muuttujaan 
let dateOfBirth = idCode.substring(0, 6);
// ja tarkista, että niistä voidaan muodostaa luku.

// 3. Erota vuosisatamerkki 
let centuryMark = idCode.substring(6, 7);
// ja tarkista, että se on +, - or A. variable !== '+' && …
// The century mark must be +, - or A.