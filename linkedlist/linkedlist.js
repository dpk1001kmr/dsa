class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addLast(data) {
    if (this.size === 0) {
      const temp = new Node(data);
      this.head = temp;
      this.tail = temp;
      this.size++;
    } else {
      const temp = new Node(data);
      this.tail.next = temp;
      this.tail = temp;
      this.size++;
    }
  }

  length() {
    return this.size;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  removeFirst() {
    if (this.size === 0) {
      console.log("[[LinkedList is Empty]]");
      return;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  getFirst() {
    if (this.size === 0) {
      console.log("[[LinkedList is Empty]]");
      return -1;
    } else {
      return this.head.data;
    }
  }

  getLast() {
    if (this.size === 0) {
      console.log("[[LinkedList is Empty]]");
      return -1;
    } else {
      return this.tail.data;
    }
  }

  getAt(index) {
    if (this.size === 0) {
      console.log("[[LinkedList is Empty]]");
      return -1;
    } else if (index < 0 || index >= this.size) {
      console.log("[[Invalid Arguments]]");
      return -1;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp.data;
    }
  }

  addFirst(data) {
    if (this.size === 0) {
      const temp = new Node(data);
      this.head = temp;
      this.tail = temp;
      this.size++;
    } else {
      const temp = new Node(data);
      temp.next = this.head;
      this.head = temp;
      this.size++;
    }
  }
}
