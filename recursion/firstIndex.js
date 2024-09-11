export function firstIndex(array, index, x) {
  if (index === array.length) return -1;

  const fiisa = firstIndex(array, index + 1, x);
  if (array[index] === x) {
    return index;
  } else {
    return fiisa;
  }
}
