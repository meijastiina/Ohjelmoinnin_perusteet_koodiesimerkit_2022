document.getElementById("submitButton").onclick = function() {
    let inputs = document.getElementsByTagName("input");
    let inputValues = "";
    // Loopataan läpi lomakkeen syötekentät
    for (let i = 0; i < inputs.length; i++) {
        // JOS tyyppi on text
        if ( inputs[i].type == "text" ) {
            inputValues += inputs[i].name + ": " + inputs[i].value + "<br>";
        } else if ( inputs[i].type == "checkbox" ) {
            // JOS tyyppi on checkbox
            // JOS checkbox on valittu
            if ( inputs[i].checked ) {
                inputValues += inputs[i].name + ": " + inputs[i].value + "<br>";
            }
        }
    }
    //document.write(inputValues);
    let requiredElements = document.querySelectorAll("input:required");
    // Loopataan läpi vaaditut elementit
    for (let i = 0; i < requiredElements.length; i++) {
        alert("Vaadittu kenttä " + requiredElements[i].name + " puuttuu.")
    }
}

// Käsittele conditions-checkboxin click
document.getElementById("conditions").onclick = function() {
    // JOS on valittu
    if ( document.getElementById("conditions").checked ) {
        // Enabloi submit-painike
        document.getElementById("submitButton").removeAttribute("disabled");
    } else {
        // Disabloi submit-painike
        document.getElementById("submitButton").setAttribute("disabled", "true");
    }
}