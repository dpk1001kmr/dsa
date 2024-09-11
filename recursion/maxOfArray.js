export function maxOfArray(array, index) {
  if (index === array.length) return -Infinity;
  const max = maxOfArray(array, index + 1);
  if (max > array[index]) {
    return max;
  } else {
    return array[index];
  }
}
