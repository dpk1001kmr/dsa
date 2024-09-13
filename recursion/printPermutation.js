export function printPermutation(str, result) {
  if (str === "") {
    console.log(result);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const leftStr = str.substring(0, i);
    const char = str[i];
    const rightStr = str.substring(i + 1);
    printPermutation(leftStr + rightStr, result + char);
  }
}
