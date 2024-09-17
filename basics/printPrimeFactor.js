export function printPrimeFactor(n) {
  for (let divisor = 2; divisor <= Math.floor(Math.sqrt(n)); divisor++) {
    while (n % divisor === 0) {
      n = n / divisor;
      console.log(divisor);
    }
  }
  if (n !== 1) console.log(n);
}
