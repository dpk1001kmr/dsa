export function spanOfArray(array) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  return max - min;
}
