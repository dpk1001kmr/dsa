const keypad = {
  1: "abc",
  2: "def",
  3: "ghi",
  4: "jkl",
  5: "mno",
  6: "pqr",
  7: "stu",
  8: "vwz",
  9: "yz",
  0: "@#$",
};

export function printKeypadCombination(str, result) {
  if (str === "") {
    console.log(result);
    return;
  }

  const firstChar = str[0];
  const smallerStr = str.substring(1);
  const firstCharString = keypad[firstChar];

  for (let i = 0; i < firstCharString.length; i++) {
    printKeypadCombination(smallerStr, result + firstCharString[i]);
  }
}
