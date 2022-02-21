// Haetaan tulostuselementti DOM:sta muuttujaan, jotta DOM-hakuja ei tarvitse tehdä useampia
let resultElement = document.getElementById("resultElement");

function printMathExamples() {
    /**
     * MATH & NUMBER
     * 
     * 
     *  */ 

    // PI
    resultElement.innerHTML = "Piin arvo on: " + Math.PI;

    // round(), ceil(), floor(), toFixed()
    let luku = Number(inputElement1Value);
    resultElement.innerHTML += "<br>Luku on " + luku;
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä round()-funktiolla on " + Math.round(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä ceil()-funktiolla on " + Math.ceil(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä floor()-funktiolla on " + Math.floor(luku);
    resultElement.innerHTML += "<br>Luku " + luku + " pyöristettynä toFixed()-funktiolla kahteen desimaaliin on " + luku.toFixed(2);

    // min(), max()
    resultElement.innerHTML += "<br>Luvuista " + inputElement1Value + ", " + inputElement2Value + " ja " + inputElement3Value + " pienin on " + Math.min(inputElement1Value, inputElement2Value, inputElement3Value);
    resultElement.innerHTML += "<br>Luvuista " + inputElement1Value + ", " + inputElement2Value + " ja " + inputElement3Value + " suurin on " + Math.max(inputElement1Value, inputElement2Value, inputElement3Value);

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
    resultElement.innerHTML += "<br>Luku " + inputElement1Value + " potenssiin kaksi on " + Math.pow(inputElement1Value, 2);
    // sqrt()
    resultElement.innerHTML += "<br>Luvun " + inputElement1Value + " neliöjuuri on " + Math.sqrt(inputElement1Value);

}

function printStringExamples() {
    /**
     * STRING
     */

    // length
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " pituus on " + inputElement2Value.length;
    // slice(), substr()
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " ensimmäiset viisi kirjainta ovat " + inputElement2Value.slice(0, 5);
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " ensimmäiset viisi kirjainta ovat " + inputElement2Value.substring(0, 5);
    // replace()
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " a:t korvattuna e:llä " + inputElement2Value.replace("a", "e");
    // toUpperCase(), toLowerCase()
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " uppercasena " + inputElement2Value.toUpperCase();
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " lowercasena " + inputElement2Value.toLowerCase();
    // trim()

    // charAt()
    resultElement.innerHTML += "<br>Merkkijonon " + inputElement2Value + " kuudes kirjain on " + inputElement2Value.charAt(5);
}
// Käsitellään painikkeen klikkaus
document.getElementById("testButton").onclick = function() {
    // Haetaan input-kenttien arvot muuttujiin
    let inputElement1Value = document.getElementById("inputElement1").value;
    let inputElement2Value = document.getElementById("inputElement2").value;
    let inputElement3Value = document.getElementById("inputElement3").value;
    
    
}