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

export function keypadCombination(str) {
  if (str === "") return [""];
  const firstChar = str[0];
  const smallerKeypadCombination = keypadCombination(str.substring(1));
  const firstCharString = keypad[firstChar];
  const biggerKeypadCombination = [];
  for (let i = 0; i < firstCharString.length; i++) {
    for (let j = 0; j < smallerKeypadCombination.length; j++) {
      biggerKeypadCombination.push(
        firstCharString[i] + smallerKeypadCombination[j]
      );
    }
  }
  return biggerKeypadCombination;
}
