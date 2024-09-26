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

  addAt(index, data) {
    if (index < 0 || index > this.size) {
      console.log("[[Invalid Arguments]]");
    } else if (index === 0) {
      this.addFirst(data);
    } else if (index === this.size) {
      this.addLast(data);
    } else {
      let node = new Node(data);
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      this.size++;
    }
  }

  removeLast() {
    if (this.size === 0) {
      console.log("[[LinkedList is Empty]]");
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      let temp = this.head;
      for (let i = 0; i < this.size - 2; i++) {
        temp = temp.next;
      }
      this.tail = temp;
      this.tail.next = null;
      this.size--;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("[[Inavlid Arguments]]");
    } else if (index === 0) {
      this.removeFirst();
    } else if (index === this.size - 1) {
      this.removeLast();
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
      this.size--;
    }
  }
}
