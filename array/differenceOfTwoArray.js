export function differenceOfTwoArray(array1, array2) {
  const difference = new Array(array1.length);

  let carry = 0;

  let i = array1.length - 1;
  let j = array2.length - 1;

  for (let k = difference.length - 1; k >= 0; k--) {
    let digit = 0;
    let array2Value = j >= 0 ? array2[j] : 0;
    if (array1[i] + carry >= array2Value) {
      digit = array1[i] + carry - array2Value;
      carry = 0;
    } else {
      digit = array1[i] + carry + 10 - array2Value;
      carry = -1;
    }

    difference[k] = digit;

    i--;
    j--;
  }

  return difference;
}
