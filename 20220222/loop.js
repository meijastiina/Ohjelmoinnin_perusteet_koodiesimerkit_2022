let resultDiv = document.getElementById("result");
document.getElementById("printButton").onclick = function() {
    let enteredName = document.getElementById("nameInput").value;

    resultDiv.innerHTML = enteredName;
}