let languageInput = document.getElementById("languageSelect");
languageInput.onchange = function() {
    let selectedLanguage = languageInput.options[languageInput.selectedIndex].value;
    let greetingElement = document.getElementById("greeting");

    // if (selectedLanguage == "finnish") {
    //     greetingElement.innerHTML = "Heipähei";
    // } else if ( selectedLanguage == "english") {
    //     greetingElement.innerHTML = "Howdyhow!";
    // } else if ( selectedLanguage == "german") {
    //     greetingElement.innerHTML = "Mein Gott!";
    // } else if (selectedLanguage == "french") {
    //     greetingElement.innerHTML = "Mon Dieu!";
    // } else if (selectedLanguage == "swedish") {
    //     greetingElement.innerHTML = "Hejssan alla!";
    // } else {
    //     greetingElement.innerHTML = "Please select language!";
    // }

    // Vaihtoehtoinen switch case -rakenne
    switch (selectedLanguage) {
        case "finnish":
            greetingElement.innerHTML = "Heipähei";
            break;
        case "english":
            greetingElement.innerHTML = "Howdyhow";
            break;
        case "german":
            greetingElement.innerHTML = "Mein Gott";
            break;
        case "french":
            greetingElement.innerHTML = "Mon Dieu";
            break;
        case "swedish":
            greetingElement.innerHTML = "Hejssan alla";
            break;
        default:
            greetingElement.innerHTML = "Please select language!";
            break;
    }
}