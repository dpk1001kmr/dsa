export function linearSearch(array, data) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === data) {
      index = i;
      break;
    }
  }
  return index;
}
