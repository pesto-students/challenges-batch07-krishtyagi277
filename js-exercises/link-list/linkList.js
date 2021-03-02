import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.countOfNodes = 0;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    if (this.countOfNodes === 0) {
      const startNode = this.head;
      this.head = node;
      node.next = startNode;
    } else {
      this.head = node;
    }
    this.countOfNodes += 1;
  }

  append(value) {
    const node = new LinkListNode(value);
    if (this.countOfNodes === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new LinkListNode(value);
    }
    this.countOfNodes += 1;
  }

  delete(value) {
    if (this.countOfNodes === 0) {
      return this.head;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      if (current.value === value) {
        break;
      }
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.countOfNodes -= 1;
    return true;
  }

  traverse() {
    let current = this.head;
    const nodeArr = [];
    let index = 0;
    while (index < this.countOfNodes) {
      nodeArr.push(current.value);
      current = current.next;
      index += 1;
    }
  }

  contains(value) {
    let index = 0;
    if (this.countOfNodes === 0) {
      return false;
    }
    let current = this.head;
    while (index < this.countOfNodes) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
      index += 1;
    }
    return false;
  }

  length() {
    return this.countOfNodes;
  }
}
