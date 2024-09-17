import { gcd } from "./gcd.js";

export function lcm(m, n) {
  const greatestCommonFactor = gcd(m, n);
  const lowestCommonFactor = (m * n) / greatestCommonFactor;
  return lowestCommonFactor;
}
