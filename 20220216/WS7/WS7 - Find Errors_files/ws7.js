let otsikko = "";
/* 1. document.write - Ensimmäinen tehtäväsi on klassinen Hello world, jonka ideana on saada kirjoitettua sivulle jotakin JavaScriptin avulla.*/
otsikko = "Tehtävä 1. Hello world!";
document.write(otsikko);

/* 2. alert - Kokeillaan seuraavaksi tervehtimistä vähän eri tavalla, viestiboksin kautta. */
alert = 'Tehtävä 2. Hello world!';

/* 3. document.getElementById - Viestin kirjoittaminen haluttuun elementtiin sivulla.*/
document.getElementById('write-here').innerHTML = 'Tehtävä 3. Hello world!';

/* 4. Lukeminen */
document.getElementById('firstname').innerHTML = document.getElementById('firstname-input').value;
document.getElementById('lastname').innerHTML = document.getElementById('lastname-input').value;
document.getElementById('age').innerHTML = "Testi" + " " + document.getElementById('age-input').value;

/* 5. Arvon vaihtaminen */
document.getElementById('box').setAttribute('href', 'http://www.seamk.fi');
document.getElementById('box').style.color = 'black';
document.getElementById('box').style.backgroundColor = 'red';
document.getElementById('box').style.fontWeight = 'bold';