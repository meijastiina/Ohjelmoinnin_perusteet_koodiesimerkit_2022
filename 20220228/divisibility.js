/**
 * L5: Divisibility - function l05()
Tulosta 3:lla jaolliset luvut käyttäjän antamalta lukuväliltä (min, max) elementtiin divisibility3.
Tulostaa 5:llä jaolliset luvut käyttäjän antamalta lukuväliltä elementtiin divisibility5.
Luku on jaollinen toisella numerolla, kun jakojäännös on nolla
 */

let min = "1";
let max = "10";
let printElement = document.getElementById("printHere");
// Looppaa läpi luvut min-max
for ( let i = min; i <= max; i++ ) {
    // Tulosta 3:lla jaolliset luvut
    // JOS luku on jaollinen kolmella
    if ( i % 3 == 0 ) {
        printElement.innerHTML += i + "<br>";
    }
}