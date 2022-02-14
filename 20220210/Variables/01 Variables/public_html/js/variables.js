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

function t01() {
    document.getElementById("welcome").innerHTML =
    document.getElementById("name").value;
}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;

    let hoursInDay = 24;
    let dayInYear = 365;
    let secInYear = secInMinutes * minInHours * hoursInDay * dayInYear;  
    document.getElementById("seconds").innerHTML = 
    secInYear;
}

function t03() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let third = Number(document.getElementById("third)").value);
    let average = (first + second + third) / 3;
    document.getElementById("average").innerHTML = average;
}

function t04() {
    // Yhteenlasku
    // Laita input-kenttien arvot tuonne operandeiksi 
    document.getElementById("d1").innerHTML = Number(document.getElementById("number1").value);
    document.getElementById("d2").innerHTML = Number(document.getElementById("number2").value);
    // Laske summa
    // Laita summa näkyville
    document.getElementById("d3").innerHTML = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
}


function t05() {
    let price = document.getElementById("price").value;
    let percent = document.getElementById("percent").value;
    let discount = percent * 0.05;
    let newprice = discount * price;
    document.getElementById("newprice").innerHTML = newprice;
}

function t06() {
    let year = document.getElementById("year").value;
    let today = new Date();// kuluva päivä
    let current_year = today. getFullYear();
    let age = year
}

function t07() {
    let seats = document.getElementById("seats").value;
    let guests = document.getElementById("guests").value;
    let remaining = seats - guests;
    document.getElementById("remaining").innerHTML = remaining;
}

function t08() {
    let plants = document.getElementById("plants").value;
    let distance = document.getElementById("distance").value;
    let Hedgerow = plants * distance;
    document.getElementById("lenght_cm").innerHTML = Hedgerow;

    let plantsm = plants * 0.1;
    let distancem = distance * 0.1;
    let hedgerowm = plantsm * distancem;
    document.getElementById("lenght_m").innerHTML = hedgerowm;
}

function t09() {
    let participant = document.getElementById("participant").value;
    let sausages = participant * 3;
    document.getElementById("sausages").innerHTML = sausages;

    let drinks = participant * 5;
    document.getElementById("drinks").innerHTML = drinks;

    let tomatoes = participant * 2;
    document.getElementById("tomatoes").innerHTML = tomatoes;

    let eggs = participant * 1;
    document.getElementById("eggs").innerHTML = eggs;
}




