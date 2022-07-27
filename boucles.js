// exercice test nombre premier

var nombre = 97;
var estPremier = true;

for (var i = 2; i < nombre; i++) {
  if (nombre % i === 0) {
    estPremier = false;
    console.log("C'est nombre n'est pas premier");
    console.log(nombre + " est divisible par " + i);
    break;
  }
}

if (estPremier) {
  console.log(nombre + " est premier !");
}

/*
Le nombre est premier SI
il n'est divisible que par 1 ou lui même
Le nombre n'est pas premier SI
il est divisible par un nombre compris entre 2 et lui même -1
*/

// exercie test en dessous de la moyenne

var eleves = [
  {
    nom: "Marc",
    moyenne: 15,
  },
  {
    nom: "Marion",
    moyenne: 8,
  },
  {
    nom: "Antoine",
    moyenne: 4,
  },
];

for (var j = 0; j < eleves.length; j++) {
  var eleve = eleves[j];
  if (eleve.moyenne < 10) {
    console.log(eleve.nom + " tu as en dessous de la moyenne");
  } else {
    console.log(eleve.nom + " tu as plus de la moyenne");
  }
}

/*
POUR chaque éleves afficher la moyenne
SI en dessous de la moyenne ALORS text
SINON text
*/
