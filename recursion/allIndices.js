export function allIndices(array, index, x, fsf) {
  if (index === array.length) return new Array(fsf);

  if (array[index] === x) {
    const iarray = allIndices(array, index + 1, x, fsf + 1);
    iarray[fsf] = index;
    return iarray;
  } else {
    const iarray = allIndices(array, index + 1, x, fsf);
    return iarray;
  }
}
