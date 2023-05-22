export function isValidCard(value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    let digit = parseInt(value[i]);
    if (i % 2 === 0) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0 ? true : false;
}
