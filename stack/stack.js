export class Stack {
  constructor() {
    this.array = [];
  }
  push(data) {
    this.array.push(data);
  }
  pop() {
    return this.array.pop();
  }
  top() {
    return this.array[this.array.length - 1];
  }
  length() {
    return this.array.length;
  }
}
