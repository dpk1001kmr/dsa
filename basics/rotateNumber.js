import { countDigits } from "./countDigits.js";

export function rotateNumber(n, k) {
  const numberOfDigits = countDigits(n);
  if (k < 0) {
    while (k < 0) {
      k = numberOfDigits + k;
    }
  } else {
    k = k % numberOfDigits;
  }
  const firstPartOfNumber = Math.floor(n / Math.pow(10, k));
  const secondPartOfNumber = n % Math.pow(10, k);
  const rotatedNumber =
    secondPartOfNumber * Math.pow(10, numberOfDigits - k) + firstPartOfNumber;
  return rotatedNumber;
}
