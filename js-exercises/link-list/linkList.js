import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.countOfNodes = 0;
  }

  prepend(value) {
    if (value === null && value === undefined) {
      throw new Error('Value must not be null or undefined');
    }
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
    if (value === null && value === undefined) {
      throw new Error('Value must not be null or undefined');
    }
    const node = new LinkListNode(value);
    if (this.countOfNodes === 0) {
      this.head = node;
      this.countOfNodes += 1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new LinkListNode(value);
      this.countOfNodes += 1;
    }
  }

  delete(value) {
    if (value === null && value === undefined) {
      throw new Error('Value must not be null or undefined');
    }
    if (this.countOfNodes === 0) {
      return this.head;
    }
    let current = this.head;
    let prev = null;
    let found = false;
    let index = 0;
    while (index < this.countOfNodes) {
      if (current.value === value) {
        found = true;
        break;
      }
      prev = current;
      current = current.next;
      index += 1;
    }
    if (found) {
      prev.next = current.next;
      this.countOfNodes -= 1;
      return true;
    }
    return false;
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
    if (value === null && value === undefined) {
      throw new Error('Value must not be null or undefined');
    }
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
