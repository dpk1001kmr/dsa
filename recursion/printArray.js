export function printArray(array, index) {
  if (index === array.length) return;
  console.log(array[index]);
  printArray(array, index + 1);
}
