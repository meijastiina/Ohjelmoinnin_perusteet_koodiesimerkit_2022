/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

// copy and paste here the random number generator function
//             0   1  2   3   4   5  6   7   8   9
let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];


/*
Sivulla on kaksi elementtiä tulostusta varten. Tulosta elementin
result_a1 ominaisuuteen innerHTML edellä oleva taulukko numbers.
Elementtiin result_a2 tulostat taulukon arvot yksi kerrallaan alkaen ensimmäisestä taulukkoalkiosta käyttäen for-toistoa. Laita välilyönti (" ") tulostettujen arvojen väliin.
*/
function t01a() {
    // Tulosta elementin result_a1 ominaisuuteen innerHTML edellä oleva taulukko numbers.
    document.getElementById("result_a1").innerHTML = numbers.toString();
    // Elementtiin result_a2 tulostat taulukon arvot yksi kerrallaan alkaen ensimmäisestä taulukkoalkiosta käyttäen for-toistoa. Laita välilyönti (" ") tulostettujen arvojen väliin.
    for( let i = 0; i < numbers.length; i++ ) {
        document.getElementById("result_a2").innerHTML += numbers[i] + " ";
    }
}

/*
Elementtiin result_b tulostat taulukon arvot yksi kerrallaan alkaen
viimeisestä taulukkoalkiosta käyttäen for-toistoa. Laita välilyönti (" ")
tulostettujen arvojen väliin.
*/
function t01b() {
    for( let i = numbers.length - 1; i >= 0; i-- ) {
        document.getElementById("result_b").innerHTML += numbers[i] + " ";
    }
}

function t01c() {

}

function t01d() {

}

function t01e() {

}

function t01f() {

}

function t02() {  

}

function t03() {

}

function t04() {    

}

function t05() {    
    let dices = ["",
        '<img alt="dice 1" src="img/noppa1.png">',
        '<img alt="dice 2" src="img/noppa2.png">',
        '<img alt="dice 3" src="img/noppa3.png">',
        '<img alt="dice 4" src="img/noppa4.png">',
        '<img alt="dice 5" src="img/noppa5.png">',
        '<img alt="dice 6" src="img/noppa6.png">'
    ];
    
}
