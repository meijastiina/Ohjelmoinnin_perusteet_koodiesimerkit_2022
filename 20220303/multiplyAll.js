/*

L9: Multiply all - function l09()
Tee ohjelma (kahta sisäkkäistä for –rakennetta käyttäen), joka tulostaa kaikki kertotaulut 0-10.
Jokaisen kertotaulun jälkeen on puolipiste ja kaksi välilyöntiä (&nbsp; = välilyönti, joka aina tulostuu,
nbsp = non-breakable sp

*/
// ulompi silmukka tekee rivit
for( let i = 0; i <= 10; i++ ) {
    // sisempi silmukka tekee "sarakkeet" eli kertotaulut
    for ( let j = 0; j <= 10; j++ ) {
        document.getElementById("printHere").innerHTML += i + " * " + j + " = " + i * j + ";&nbsp;&nbsp;";
    }
    // Kertotaulu tulostettu -> lisätään rivinvaihto
    document.getElementById("printHere").innerHTML += "<br>";   
}