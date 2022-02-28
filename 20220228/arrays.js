document.getElementById("clickMeButton").onclick = function() {
    let number1 = document.getElementById("number1").value;
    
    // Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
    let fruits = ["banana", "apple", "kiwi", "orange", "grapefruit"];
    // Let's change banana to passion fruit
    fruits[0] = "passion fruit";
    // Let's add mango to the end of the array
    fruits.push("mango");
    // Let's add pineapple to the start of the array
    fruits.unshift("pineapple");
    // Print out "First item in the array is [first item]".
    let printElement = document.getElementById("printHere");
    printElement.innerHTML = "First item in the array is " + fruits[0] + "<br>";
    
    printArray(fruits, printElement);

    let numberArray = [1, 5, 11, 2, 32, 23, 100];
    numberArray.sort();
    printArray(numberArray, printElement);
    printArray(numberArray, printElement);
    printArray(numberArray, printElement);
    printArray(numberArray, document.getElementById("printHere2"));

    printElement.innerHTML += numberArray.toString();

    let result = sum(1, 2);
}

function sum(number1, number2) {
    return number1 + number2;
}

/**
 * printArray() prints out an array
 */
function printArray(array, printElement) {
    // Loop through the array backwards and print out the items.
    for (let i = array.length - 1; i >= 0; i--) {
        // print out the current item
        printElement.innerHTML += array[i] + "<br>";
    }
}