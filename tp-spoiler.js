/* 
Quand je CLIQUE sur le BOUTON J'AJOUTE la CLASSE .visible à spoiler-content
et je fais disparaitre le boutton */

/* let button = document.querySelector(".spoiler button");
button.addEventListener("click", function () {
  this.nextElementSibling.classlist.add("visible");
  this.parentNode.removeChild(button);
}); */

const elements = document.querySelectorAll(".spoiler");
const createSpoilerButton = function (element) {
  const button = document.createElement("button");
  button.textContent = "Afficher le spoiler";
  element.appendchild(button);
};
for (let i = 0; i < elements.length; i++) {
  createSpoilerButton(elements[i]);
}
