function sum(number1, number2) {
    return number1 + number2;
}

/**
 * Returns the sum of two numbers
 * @param {Number} number1 First operand in sum
 * @param {Number} number2 Second operand in sum
 * @returns {Number} Result sum of two operands
 */
function sumDocumented(number1, number2) {
    return number1 + number2;
}

let sum1 = sum(1, 5);
let sum2 = sumDocumented(1, 5);

let anyHTMLElement = document.getElementById("input");
alert(anyHTMLElement.nodeValue);

/** @type {HTMLInputElement} */
let inputElement = document.getElementById("input");
alert(inputElement.value);

let merkkijono = "merkkijono";
let merkkijononKuusiEkaaMerkkia = merkkijono.substring(0, 6);
Number.isNaN(merkkijononKuusiEkaaMerkkia)