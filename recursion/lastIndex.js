export function lastIndex(array, index, x) {
  if (index === array.length) return -1;

  const liisa = lastIndex(array, index + 1, x);
  if (liisa === -1) {
    if (array[index] === x) {
      return index;
    } else {
      return -1;
    }
  } else {
    return liisa;
  }
}
