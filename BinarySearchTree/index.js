class Node {
  constructor (value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    let node = this.root
    if (node === null) {
      this.root = new Node(value)
      return
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value)
            return
          } else {
            return searchTree(node.left)
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value)
            return
          } else {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }

      return searchTree(node)
    }
  }

  findMin () {
    let current = this.root
    while (current.left !==  null) {
      current = current.left
    }
    return current.value
  }

  findMax () {
    let current =  this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.value
  }

  find (value) {
    let current = this.root
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      } 
      // console.log(current, 'current')
      if (current === null) {
        return false
      }
    }
    return current
  }

  isPresent (value) {
    let current = this.root
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      } 
      if (current === null) {
        return false
      }
    }
    // console.log(current, 'current')
    return true
  }

  remove(value) {
    const removeNode = function(node, value) {
      if (node == null) {
        return null;
      }
      if (value == node.value) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }
    this.root = removeNode(this.root, value);
  }

  findMinHeight (node = this.root) {
    if (node === null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)

    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  findMaxHeight (node = this.root) {
    if (node === null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)

    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  isBalanced () {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  inOrder () {
    if (this.root === null) {
      return null
    } else {
      let result = new Array();
      const traverseInOrder = (node) => {
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  preOrder () {
    if (this.root === null) {
      return null
    } else {
      let result = new Array();
      const traversepreOrder = (node) => {
        result.push(node.data)
        node.left && traversepreOrder(node.left)
        node.right && traversepreOrder(node.right)
      }
      traversepreOrder(this.root)
      return result
    }
  }

  postOrder () {
    if (this.root === null) {
      return null
    } else {
      let result = new Array();
      const traversepostOrder = (node) => {
        node.left && traversepostOrder(node.left)
        node.right && traversepostOrder(node.right)
        result.push(node.data)
      }
      traversepostOrder(this.root)
      return result
    }
  }

  levelOrder () {
    let result = []
    let Q = []
    if (this.root != null) {
      Q.push(this.root) 
      while (Q.length > 0) {
        let node = Q.shift()
        result.push(node.value)
        if (node.left !== null) {
          Q.push(node.left)
        }
        if (node.right !== null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
  
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup("bdd");
const { assert } = chai;

describe('A Tree', () => {
	it("has properties 'value', 'left' and 'right'", () => {
		const node = new Node(5, 2, 6);
		assert.equal(node.value, 5);
		assert.equal(node.left, 2);
    assert.equal(node.right, 6);
	});
});

describe("insert()", () => {
  it("Sets root of BST if BST has no root.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(1);
    assert.equal(BST.root.value, 10);
    //          10
    //        /   \
    //       ?     ?
  });
  it("Does not insert if value is equal to another value in BST.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(10);

    assert.isNotOk(BST.root.left);
    assert.isNotOk(BST.root.right);
  });
  it("Inserts correctly.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.equal(BST.root.left.value, 3);
    assert.equal(BST.root.left.left.value, 1);
    assert.equal(BST.root.left.right.value, 6);

    assert.equal(BST.root.right.value, 10);
    assert.equal(BST.root.right.right.value, 14);
  });
});

describe("findMin()", () => {
  it("returns node with the minimum value.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    const min = BST.root.left.left.value;
    assert.deepEqual(BST.findMin(), min);
  });
}); 

describe("findMax()", () => {
  it("returns node with the maximum value.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    const max = BST.root.right.right.value;
    assert.deepEqual(BST.findMax(), max);
  });
}); 

describe("find()", () => {
  it("returns node with the same value.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    const six = BST.root.left.right;
    assert.deepEqual(BST.find(6), six);
  });
  it("returns falsy value if value not found.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.isNotOk(BST.find(9999));
  });
});

describe("isPresent()", () => {
  it("returns true value if value found.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.deepEqual(BST.isPresent(6), true);
  });
  it("returns false value if value not found.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.deepEqual(BST.isPresent(699), false);
  });
});

describe("findMinHeight()", () => {
  it("returns minimum height of the tree.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(0);
    BST.insert(2);
    BST.insert(4);
    BST.insert(6);
    BST.insert(7);
    BST.insert(9);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \    /  \
    //     1   6   9  14
    //    /\  /  \
    //   0  2 4   7
    assert.deepEqual(BST.findMinHeight(), 2);
  });
});

describe("findMaxHeight()", () => {
  it("returns maximum height of the tree.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.deepEqual(BST.findMaxHeight(), 2);
  });
});

describe("BFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.BFS(), []);
  });
  it("can traverse BF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.BFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(res.map(node => node.value), [8, 3, 10, 1, 6, 14]);
  });
});

describe("DFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.DFS(), []);
  });
  it("can traverse DF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.DFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(res.map(node => node.value), [8, 3, 1, 6, 10, 14]);
  });
});

mocha.run();
