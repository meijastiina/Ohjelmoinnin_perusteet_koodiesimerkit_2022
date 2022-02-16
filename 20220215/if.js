// Haetaan DOMsta syötekenttä
let numberInput = document.getElementById("numberInput");


numberInput.onkeyup = function() {
    // Nämä koodirivit ajetaan kun syötekentän arvo muuttuu
    
    if (numberInput.value == "0") {
        document.getElementById("tulostusSpan").innerHTML ="You entered zero";
    } else {
        document.getElementById("tulostusSpan").innerHTML ="You entered something else";
    }
}

// Parillisuuden tarkistus
let luku = 4;
if ( luku % 2 == 0 ) {
    // Parillinen
} else {
    // Pariton
}