class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data, null, null);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    let parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = newNode;
          return;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = newNode;
          return;
        }
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (this.root == null) {
      return null;
    }
    if (data == node.data) {
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      let rightMinNode = this.getMin(node.right);
      node.data = rightMinNode.data;
      node.right = this.removeNode(node.right, rightMinNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  getMin(node) {
    let current = node;
    while (current.left != null) {
      current = current.left;
    }
    return current;
  }
  getMax(node) {
    let current = node;
    while (current.right != null) {
      current = current.right;
    }
    return current;
  }
  infix(node) {
    if (node.left == null && node.right == null) {
      return node.data;
    } else if (node.left == null) {
      return node.data + ',' + this.infix(node.right);
    } else if (node.right == null) {
      return this.infix(node.left) + ',' + node.data;
    }
    return this.infix(node.left) + ',' + node.data + ',' + this.infix(node.right);
  }
}

function solution(n, works) {
  let tree = new BinaryTree();
  for (let i in works) {
    let work = works[i];
    tree.insert(work);
  }
  while (n > 0) {
    let work = tree.getMax(tree.root);
    if (work.data == 0) {
      return 0;
    }
    tree.remove(work.data);
    tree.insert(work.data - 1);
    n--;
  }
  let overtimeWork = JSON.parse('[' + tree.infix(tree.root) + ']');
  return overtimeWork.reduce((p, c) => p + c * c, 0);
}

console.log(solution(4, [4, 3, 3]));    // 12
console.log(solution(1, [2, 1, 2]));    // 6
console.log(solution(3, [1, 1]));       // 0