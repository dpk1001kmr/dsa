export class Stack {
  constructor() {
    this.array = [];
  }
  push(data) {
    this.array.push(data);
  }
  pop() {
    if (this.array.length === 0) return null;
    return this.array.pop();
  }
  top() {
    if (this.array.length === 0) return null;
    return this.array[this.array.length - 1];
  }
  length() {
    return this.array.length;
  }
}
