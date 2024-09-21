import { Stack } from "./stack.js";

export function duplicateBracket(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (character === ")") {
      if (stack.top() === "(") {
        return true;
      } else {
        while (stack.top() !== "(") {
          stack.pop();
        }
        stack.pop();
      }
    } else {
      stack.push(character);
    }
  }
  return false;
}
