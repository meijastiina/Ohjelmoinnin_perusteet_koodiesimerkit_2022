// Once mouse is on textarea, 
document.getElementById("textarea-element").onmouseover = function() {
    // show a text "Mouse is on textarea" in span element.
    document.getElementById("span-element").innerHTML = "Mouse is on textarea";
}
// Once mouse has left textarea
document.getElementById("textarea-element").onmouseout = function() {
    //, empty the span.
    document.getElementById("span-element").innerHTML = "";
}
// Once a value is entered in textarea, show a text "Contents of textarea: [contents]" in span.
// Once button is pressed, increment the value in p by the value in input.
