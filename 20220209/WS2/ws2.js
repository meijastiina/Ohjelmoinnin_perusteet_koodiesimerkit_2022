/*
1. Ensimmäinen muuttuja
Luo muuttuja age ja anna sille arvoksi 5. Tulosta muuttujan arvo alla olevaan laatikkoon.
*/
let age = 5;
document.getElementById("age").innerHTML = age;

/*

2. Koiran ikä ihmisen iässä
Käytä edellisessä tehtävässä luotua muuttujaa ja laske sen perusteella koiran ikä ihmisen iässä (kerrotaan tässä seitsemällä, vaikkakaan perinteiselle kaavalle ei ole tieteellistä perustetta), tallenna se uuteen muuttujaan ja tulosta se alla olevaan laatikkoon.
*/
// Laske koiran ikä ihmisen iässä ja tallenna muuttujaan
let dogAge = age * 7;
// Tulosta laskettu ikä 
document.getElementById("dogsAge").innerHTML = dogAge;


/*

3. Merkkijonojen yhdistelyä
Yhdistä etunimi ja sukunimi kokonimeksi vastaavaan kenttään.

*/

document.getElementById("fullname-input").value = document.getElementById("firstname-input").value + " " + document.getElementById("lastname-input").value;

/*
4. Painikelaskuri
Kirjoita allaolevalle painikkeelle toiminnallisuus, että se kasvattaa painikkeen alla olevaa laskuria jokaisella klikkauksella yhdellä.
*/
// Luo muuttuja laskuri
let laskuri = 0;
// Luo tapahtumankäsittelijä painikkeen klikkaukselle
document.getElementById("btnCounter").onclick = function() {
    // Tänne tulee kaikki koodi, mitä tapahtuu painikkeen klikkauksella.
    // Kasvata laskurin arvoa yhdellä
    laskuri = laskuri + 1;
    // Voi kirjoittaa myös laskuri++;
    // Tulosta laskurin päivitetty arvo
    document.getElementById("counter").value = laskuri;
}
/*
5. Yksinkertaistettu laskin
Kirjoita toiminnallisuus allaoleville painikkeille niin, että se toimii yksinkertaisen laskimen tapaan.
*/
// Yhteenlasku
// Luo tapahtumankäsittelijä painikkeen klikkaukselle
document.getElementById("addition").onclick = function() {
    // Tänne mennään kun painiketta klikataan
    document.getElementById("result").value = Number(document.getElementById("operand1").value) + Number(document.getElementById("operand2").value);
    // elementti johon arvo asetetaan = asetettava arvo
}
document.getElementById("deduction").onclick = function() {
    // Tänne mennään kun painiketta klikataan
    document.getElementById("result").value = document.getElementById("operand1").value - document.getElementById("operand2").value;
    // elementti johon arvo asetetaan = asetettava arvo
}