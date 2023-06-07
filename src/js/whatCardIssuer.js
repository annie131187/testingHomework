import data from "./cardsInfo.json";

export function whatCardIssuer(value) {
  value = String(value);
  for (let i = 0; i < data.length; i++) {
    const firstNums = data[i].firstNum;
    if (
      Array.isArray(firstNums) &&
      firstNums.some((num) => value.startsWith(num)) &&
      value.length >= data[i].minLength &&
      value.length <= data[i].maxLength
    ) {
      return data[i].name;
    } else if (
      value.startsWith(firstNums) &&
      value.length >= data[i].minLength &&
      value.length <= data[i].maxLength
    ) {
      return data[i].name;
    }
  }
  return null;
}
