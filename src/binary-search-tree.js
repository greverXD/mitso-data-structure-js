const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this._root = null; 
  }
  

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
    } else {
      this.addNode(this._root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;  //либо return !!this.find(data) 
  }

  find(data) {
    return this.findNode(this._root, data); 
  }

  findNode(node, data) {
    if (!node) return null;
    if (data === node.data) return node;
    if (data < node.data) return this.findNode(node.left, data);
    return this.findNode(node.right, data);
  }

  remove(data) {
    this._root = this.removeNode(this._root, data); 
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }  else {
        const minRight = this.findMinNode(node.right);
        node.data = minRight.data;
        node.right = this.removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this._root) return null;
    return this.findMinNode(this._root).data;
  }

  findMinNode(node) {
    if (!node.left) return node;
    return this.findMinNode(node.left);
  }

  max() {
    if (!this._root) return null;
    return this.findMaxNode(this._root).data;
  }

  findMaxNode(node) {
    if (!node.right) return node;
    return this.findMaxNode(node.right);
  }
};