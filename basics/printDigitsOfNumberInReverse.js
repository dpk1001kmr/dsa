export function printDigitsOfNumberInReverse(n) {
  while (n !== 0) {
    let remainder = n % 10;
    n = Math.floor(n / 10);
    console.log(remainder);
  }
}
