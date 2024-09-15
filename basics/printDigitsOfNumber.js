import { countDigits } from "./countDigits.js";

export function printDigitsOfNumber(n) {
  const numberOfDigits = countDigits(n);
  let divisor = Math.pow(10, numberOfDigits - 1);
  while (divisor !== 0) {
    let m = Math.floor(n / divisor);
    n = n % divisor;
    divisor = Math.floor(divisor / 10);
    console.log(m);
  }
}
