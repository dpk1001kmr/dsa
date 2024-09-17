export function inverseOfNumber(n) {
  let position = 1;
  let sum = 0;
  while (n !== 0) {
    let remainder = n % 10;
    sum += Math.pow(10, remainder - 1) * position;
    position++;
    n = Math.floor(n / 10);
  }
  return sum;
}
