export function sumOfTwoArray(array1, array2) {
  const sum = new Array(
    array1.length > array2.length ? array1.length + 1 : array2.length + 1
  );

  let carry = 0;

  let i = array1.length - 1;
  let j = array2.length - 1;

  for (let k = sum.length - 1; k >= 0; k--) {
    let digit = carry;
    if (array1[i]) digit += array1[i];
    if (array2[j]) digit += array2[j];

    sum[k] = digit % 10;
    carry = Math.floor(digit / 10);

    i--;
    j--;
  }
  return sum;
}
