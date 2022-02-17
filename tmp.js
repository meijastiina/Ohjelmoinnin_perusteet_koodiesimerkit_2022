let currentDate = new Date(); // Luodaan uusi muuttuja jossa kuluva päivämäärä
console.log("Tänään on " + currentDate);
console.log("Viikonpäivä: " + currentDate.getDay());
console.log("Päiväys: " + currentDate.getDate());
console.log("Kuukausi: " + currentDate.getMonth());
console.log("Vuosi: " + currentDate.getFullYear());
console.log("Tunnit: " + currentDate.getHours());
console.log("Minuutit: " + currentDate.getMinutes());

function t06() {
    let year = 1980 //document.getElementById("year").value;
    let today = new Date();
    let current_year = today.getFullYear();
    let age = current_year - year
    console.log(age);
}   
t06();

let today = new Date();
let current_year = today.getFullYear();
let age = current_year - 2010; //Number(document.getElementById("year").value);
//document.getElementById("v01()").onclick = current_year - age;

    

if (age >= "18") {console.log("Welcome")}
else { console.log("Too young")}


let year;

if ( year % 4 == 0 ) {
// Vuosi on jaollinen neljällä
    if ( year % 100 == 0 ) {
    // Vuosi on jaollinen sadalla
        // Vuosi jaollinen neljälläsadalla
            // -> karkausvuosi
        // ei jaollinen 400
            // -> tavallinen
    } else {
    // ei ole jaollinen 100
        // -> karkausvuosi
    }
} else {
// ei ole jaollinen neljällä
    // -> tavallinen
}