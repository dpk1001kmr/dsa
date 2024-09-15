export function isPrime(n) {
  let numberIsPrime = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      numberIsPrime = false;
      break;
    }
  }
  return numberIsPrime;
}
