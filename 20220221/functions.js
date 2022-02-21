// Haetaan tulostuselementti DOM:sta muuttujaan, jotta DOM-hakuja ei tarvitse tehdä useampia
let resultElement = document.getElementById("resultElement");

function printMathExamples(number1, number2, number3) {
    /**
     * MATH & NUMBER
     * 
     * 
     *  */ 

    // PI
    resultElement.innerHTML = "Piin arvo on: " + Math.PI;

    // round(), ceil(), floor(), toFixed()
    let luku = Number(number1);
    resultElement.innerHTML += "<br>Luku on " + luku;
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä round()-funktiolla on " + Math.round(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä ceil()-funktiolla on " + Math.ceil(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä floor()-funktiolla on " + Math.floor(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä toFixed()-funktiolla kahteen desimaaliin on " + luku.toFixed(2);

    // min(), max()
    resultElement.innerHTML += "<br>Luvuista " + number1 + ", " + number2 + " ja " + number3 + " pienin on " + Math.min(number1, number2, number3);
    resultElement.innerHTML += "<br>Luvuista " + number1 + ", " + number2 + " ja " + number3 + " suurin on " + Math.max(number1, number2, number3);

    // random()
    let max = 11;
    let min = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    let randomNumber2 = Math.floor(Math.random() * (max - min) + min);
    resultElement.innerHTML += "<br>Satunnaisluku: " + randomNumber;
    resultElement.innerHTML += "<br>Satunnaisluku2: " + randomNumber2;
    // pow()
    resultElement.innerHTML += "<br>Luku " + number1 + " potenssiin kaksi on " + Math.pow(number1, 2);
    // sqrt()
    resultElement.innerHTML += "<br>Luvun " + number1 + " neliöjuuri on " + Math.sqrt(number1);

}

function printStringExamples(inputText) {
    /**
     * STRING
     */

    // length
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " pituus on " + inputText.length;
    // slice(), substr()
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " ensimmäiset viisi kirjainta ovat " + inputText.slice(0, 5);
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " ensimmäiset viisi kirjainta ovat " + inputText.substring(0, 5);
    // replace()
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " a:t korvattuna e:llä " + inputText.replace("a", "e");
    // toUpperCase(), toLowerCase()
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " uppercasena " + inputText.toUpperCase();
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " lowercasena " + inputText.toLowerCase();
    // trim()

    // charAt()
    resultElement.innerHTML += "<br>Merkkijonon " + inputText + " kuudes kirjain on " + inputText.charAt(5);
}
// Käsitellään painikkeen klikkaus
document.getElementById("testButton").onclick = function() {
    // Haetaan input-kenttien arvot muuttujiin
    let inputElement1Value = document.getElementById("inputElement1").value;
    let inputElement2Value = document.getElementById("inputElement2").value;
    let inputElement3Value = document.getElementById("inputElement3").value;
    
    // Kutsutaan matikkaesimerkkifunktiota
    printMathExamples(inputElement1Value, inputElement2Value, inputElement3Value);

    // Kutsutaan stringesimerkkifunktiota
    printStringExamples(inputElement2Value);
    printStringExamples(inputElement1Value);
    printStringExamples(inputElement3Value);
}