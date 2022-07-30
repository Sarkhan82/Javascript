/* 
LET = entre 0 et 10 
LET = PROMP Demander à l'utilisateur un chiffre
TANT que le chiffre n'est pas bon
  IF let > adeviner
trop grand !
  ELSE LET < adeviner
trop petit !
Demande à l'utisateur de rentrer un chiffre



*/

let toGuess = Math.round(Math.random() * 10);
let trys = 3;
let number = window.prompt("Tester un chiffre entre 0 et 10");
number = parseInt(number, 10);
while (number != toGuess) {
  trys--;
  if (number > toGuess) {
    window.alert("Trop Grand !");
  } else {
    window.alert("Trop Petit !");
  }
  number = window.prompt("Retentez votre chance il vous en reste " + trys);
}
if (number == toGuess) {
  window.alert("Bravo tu as réussi !");
} else {
  window.alert("Dommage :(");
}

// La methode FOR
/* 
let aDeviner = Math.round(Math.random() * 10)
let essais = 3
let essai
for (var i = 0; i < 3; i++) {
    if (i == 0) {
        essai = prompt("Entrez votre chiffre")
    } else {
        essai = prompt("Retentez votre chance")
    }
    essai = parseInt(essai, 10)
    if (essai == aDeviner) {
        break
    } else if (essai > aDeviner) {
        alert("Trop haut")
    } else {
        alert("Trop bas")
    }
}

if (essai == aDeviner) {
  window.alert("Bravo tu as réussi !");
} else {
  window.alert("Dommage :(");
}
*/
