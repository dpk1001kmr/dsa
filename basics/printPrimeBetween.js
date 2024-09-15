import { isPrime } from "./isPrime.js";

export function printPrimeBetween(m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
