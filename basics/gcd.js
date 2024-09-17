export function gcd(m, n) {
  while (n !== 0) {
    const remainder = m % n;
    m = n;
    n = remainder;
  }
  return m;
}
