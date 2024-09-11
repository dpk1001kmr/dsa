export function printZigZag(n) {
  if (n === 0) return;

  console.log(n);
  printZigZag(n - 1);
  console.log(n);
  printZigZag(n - 1);
  console.log(n);
}
