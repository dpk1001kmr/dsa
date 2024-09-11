export function subsequence(str) {
  if (str === "") return [""];
  const firstChar = str[0];
  const smallerSubsequence = subsequence(str.substring(1));
  const biggerSubsequence = [];
  for (let i = 0; i < smallerSubsequence.length; i++) {
    biggerSubsequence.push(smallerSubsequence[i]);
  }
  for (let i = 0; i < smallerSubsequence.length; i++) {
    biggerSubsequence.push(firstChar + smallerSubsequence[i]);
  }
  return biggerSubsequence;
}
