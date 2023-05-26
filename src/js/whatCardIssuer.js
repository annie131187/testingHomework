import data from "./cardsInfo.json";

export function whatCardIssuer(value) {
  value = String(value);
  for (let i = 0; i < data.length; i++) {
    if (
      value.startsWith(data[i].firstNum) &&
      value.length >= data[i].minLength &&
      value.length <= data[i].maxLength
    ) {
      return data[i].name;
    }
  }
  return null;
}
