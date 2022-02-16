let currentDate = new Date(); // Luodaan uusi muuttuja jossa kuluva päivämäärä
console.log("Tänään on " + currentDate);
console.log("Viikonpäivä: " + currentDate.getDay());
console.log("Päiväys: " + currentDate.getDate());
console.log("Kuukausi: " + currentDate.getMonth());
console.log("Vuosi: " + currentDate.getFullYear());
console.log("Tunnit: " + currentDate.getHours());
console.log("Minuutit: " + currentDate.getMinutes());