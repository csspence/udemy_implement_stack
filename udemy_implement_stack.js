/*
Udemy JavaScript Algorithms and Data Structures Masterclass
Stack Implementation
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    let temp = this.first;
    if(this.size === 0) {
      return null;
    } else if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.size--;
    return temp;
  }
}