export function digitFrequency(n, k) {
  let count = 0;
  while (n !== 0) {
    let remainder = n % 10;
    if (remainder === k) count++;
    n = Math.floor(n / 10);
  }
  return count;
}
