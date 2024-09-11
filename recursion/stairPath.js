export function stairPath(n) {
  if (n < 0) return [];
  if (n === 0) return [""];
  const smallerPath1 = stairPath(n - 1);
  const smallerPath2 = stairPath(n - 2);
  const smallerPath3 = stairPath(n - 3);
  const biggerPath = [];
  for (let i = 0; i < smallerPath1.length; i++) {
    biggerPath.push(1 + smallerPath1[i]);
  }
  for (let i = 0; i < smallerPath2.length; i++) {
    biggerPath.push(2 + smallerPath2[i]);
  }
  for (let i = 0; i < smallerPath3.length; i++) {
    biggerPath.push(3 + smallerPath3[i]);
  }
  return biggerPath;
}
