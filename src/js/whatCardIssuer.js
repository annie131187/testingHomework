import data from "./cardsInfo.json";

export function whatCardIssuer(value) {
  data.forEach((card) => {
    if (
      value.startsWith(card.firstNum) &&
      value.length >= card.minLength &&
      value.length <= card.maxLength
    ) {
      return card.name;
    }
  });
}
