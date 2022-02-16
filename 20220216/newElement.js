// Luodaan uusi div-elementti
let divElement = document.createElement('div');
// Lisätään luotu elementti bodyyn
document.body.appendChild(divElement);

// Luodaan uusi elementti
let h1Element = document.createElement('button');
// Lisätään tekstiä otsikkoelementtiin
h1Element.innerHTML = "Otsikko";
h1Element.style.color = "red";
// Lisätään luotu elementti bodyyn
divElement.appendChild(h1Element);

let pElement = document.createElement('p');
pElement.innerHTML = "Lorem ipsum";
pElement.style.color = "blue";
// Lisätään luotu elementti HTML:ssä luotuun write-here-diviin
document.getElementById("write-here").appendChild(pElement);
