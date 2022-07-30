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

var classeA = [
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

var ClasseB = [
  {
    nom: "Julien",
    moyenne: 12,
  },
  {
    nom: "Manon",
    moyenne: 17,
  },
  {
    nom: "Tonio",
    moyenne: 4,
  },
];

function afficeQuiALaMoyenne(classe) {
  for (var i = 0; i < classe.length; i++) {
    var eleve = classe[i];
    if (eleve.moyenne > 10) {
      console.log(eleve.nom + " à plus de la moyenne il a " + eleve.moyenne);
    }
  }
}

var aLaMoyenne = function (eleves) {
  var moyennes = [];
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i];
    if (eleve.moyenne >= 10) {
      moyennes.push(eleve);
    }
  }
};
afficeQuiALaMoyenne(classeA);
afficeQuiALaMoyenne(ClasseB);

/*
POUR chaque éleves afficher la moyenne
SI en dessous de la moyenne ALORS text
SINON text
*/

// Compteur nombre de mot dans un phrase

var phrase =
  "Les fonctions permettent de stocker en mémoire une certaine logique que l'on pourra utiliser à plusieurs reprises dans la suite de notre code Elles prennent en général des paramètres et retournent un résultat particulier";

var frequence = function (phrase) {
  var mots = phrase.toLowerCase().split(" ");
  var compteur = {};
  for (var i = 0; i < mots.length; i++) {
    var mot = mots[i];
    if (compteur[mot] === undefined) {
      compteur[mot] = 1;
    } else {
      compteur[mot]++;
    }
  }
  return compteur;
};

/* 
ON SEPARE notre phrase GRACE aux espaces(split)
ON CREE un compteur (objet)
  POUR CHAQUE mots
  SI le mot est dans dans les mots du compteur (compteur[mot])
     J'incrément
  SINON
     Je lui assigne la valeur

AFFICHE compteur

*/

// calculateur moyenne + qui est le meilleur

var eleve1 = {
  nom: "Jean",
  notes: [15, 16, 18],
};
var eleve2 = {
  nom: "Marc",
  notes: [5, 20, 18],
};

var moyenne = function (notes) {
  var somme = 0;
  for (var i = 0; i < notes.length; i++) somme += notes[i];
  return somme / notes.length;
};

var estMeilleur = function (a, b) {
  return moyenne(a.notes) < moyenne(b.notes);
};

// LES PROTOTYOPES

var Eleve = function (nom, notes) {
  if (notes != undefined) {
    this.notes = notes;
  }
  this.nom = nom;
};

Eleve.moyenne = function () {
  return 10;
};

Eleve.prototype.moyenne = function () {
  if (this.notes === undefined) {
    return NaN;
  }
  var somme = 0;
  for (var i = 0; i < this.notes.length; i++) {
    somme += this.notes[i];
  }
  return somme / this.notes.length;
};

var jean = new Eleve("Jean", [10, 15]);
var marc = new Eleve("Marc");
