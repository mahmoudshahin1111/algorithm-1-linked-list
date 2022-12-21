class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  /**
   *
   * @param {LinkedListNode} root
   */
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param {LinkedListNode} node
   */
  insert(node) {
    // if there isn't a root set as root
    if (!this.root) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = node;
  }

  /**
   *
   * @param {LinkedListNode} node
   */
  remove(node) {
    let currentNode = this.root;
    while (currentNode.nextNode && currentNode.nextNode !== node) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = node.nextNode;
  }
}

const linkedList = new LinkedList();
const root = new LinkedListNode("root");
const n2 = new LinkedListNode("data 2");
const n3 = new LinkedListNode("data 3");
const n4 = new LinkedListNode("data 4");
linkedList.insert(root);
linkedList.insert(n2);
linkedList.insert(n3);
linkedList.insert(n4);
linkedList.remove(n2);
