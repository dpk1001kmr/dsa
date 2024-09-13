export function printSubsequence(str, result) {
  if (str === "") {
    console.log(result);
    return;
  }

  const firstChar = str[0];
  const smallerStr = str.substring(1);

  printSubsequence(smallerStr, result + firstChar);
  printSubsequence(smallerStr, result + "");
}
