export function minOfArray(array, index) {
  if (index === array.length) return Infinity;
  const min = minOfArray(array, index + 1);
  if (min < array[index]) {
    return min;
  } else {
    return array[index];
  }
}
