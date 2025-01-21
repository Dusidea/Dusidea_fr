import {
  getElement,
  getElements,
  getbyID,
  createElement,
  addClass,
} from "./domUtils.js";
let cardList = [];
let className = "card-colored";

cardList = getElements(".card");

console.log(cardList);

cardList.forEach((card) => {
  card.addEventListener("click", () => {
    // Supprimer la classe de toutes les cartes avant d'ajouter la nouvelle pour qu'une seule card puisse être sélectionnée à la fois
    cardList.forEach((item) => item.classList.remove(className));
    addClass(card, className);
  });
});
