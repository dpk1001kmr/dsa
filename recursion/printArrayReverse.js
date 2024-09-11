export function printArrayReverse(array, index) {
  if (index === array.length) return;
  printArrayReverse(array, index + 1);
  console.log(array[index]);
}
