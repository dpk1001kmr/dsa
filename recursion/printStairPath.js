export function printStairPath(n, result) {
  if (n < 0) return;

  if (n === 0) {
    console.log(result);
    return;
  }

  printStairPath(n - 1, result + 1);
  printStairPath(n - 2, result + 2);
  printStairPath(n - 3, result + 3);
}
