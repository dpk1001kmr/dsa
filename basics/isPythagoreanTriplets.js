export function isPythagoreanTriplets(a, b, c) {
  let result = false;
  if (a > b && a > c) {
    result = a * a === b * b + c * c;
  } else if (b > c) {
    result = b * b === a * a + c * c;
  } else {
    result = c * c === a * a + b * b;
  }
  return result;
}
