import { Stack } from "./stack.js";

export function balancedBracket(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (character === "(" || character === "{" || character === "[") {
      stack.push(character);
    } else if (character === ")") {
      if (stack.length() === 0) {
        return false;
      } else if (stack.top() !== "(") {
        return false;
      } else {
        stack.pop();
      }
    } else if (character === "}") {
      if (stack.length() === 0) {
        return false;
      } else if (stack.top() !== "{") {
        return false;
      } else {
        stack.pop();
      }
    } else if (character === "]") {
      if (stack.length() === 0) {
        return false;
      } else if (stack.top() !== "[") {
        return false;
      } else {
        stack.pop();
      }
    } else {
    }
  }

  if (stack.length() === 0) {
    return true;
  } else {
    return false;
  }
}
