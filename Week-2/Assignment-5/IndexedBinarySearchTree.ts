/* disclaimer: iterable implementation is done 
with the help of Chatgpt, my work is minimal
*/
class IndexedBinarySearchTree {
    private root: Node | null;
    constructor() {
            this.root = null;
    }
    public fromArray(numbers: Array<number>): this {
        for (let number of numbers) {
        this.put(number);
        }
        return this;
    }
    public size(): number {
        if (this.root == null) {
            return 0;
        } else {
            return this.sizeOf(this.root);
        }
    }
    private sizeOf(node:Node) {
        if (node == null) {
            return 0;
        }
        return node.N;
    }
    public get(target:number):number {
        if (this.root == null) {
            return -1;
        } 
        let query =  this.getNode(this.root, target);
        if (query[0] === -1) {
            return -1;
        } else {
            return query[1];
        }

            
    }
    private nodeSize(node: Node) {
        if (node == null) {
            return 0;
        } else {
            return node.size();
        }
    }
    private getNode(node:Node, target:number):Array<number| null> {
        /*
        helper method that return an array
        first element is flagging whether the target is not found (-1)
        second element is the rank of the found target
        see ReadMe for a discussion
        */

        if (node == null) {
            return [-1, 0];
        }
        if (target < node.val) {
            let query = this.getNode(node.left, target);
            if (query[0] === -1) {
                return [-1, -1];
            } else {
                return[1 ,  query[1]]
            }
        } else if (target > node.val) {
            let query = this.getNode(node.right, target);
            if (query[0] === -1) {
                return [-1, -1];
            } else {
                return[1 , 1 + this.nodeSize(node.left) + query[1]]
            }
        } else {
            return [1, this.nodeSize(node.left)];
        }
    }
    public put(val:number):void {
        if (this.root == null) {
            this.root = new Node (val, 1);
        } else {
            this.root = this.putNode(this.root, val);
        }
    }
    private putNode(node:Node, val:number):Node {
        if (node == null) {
            return new Node (val, 1);
        }
        if (val === node.val) {
            return node;
        } else if (val < node.val) {
            // go left
            node.left = this.putNode(node.left, val);
        } else if (val > node.val) {
            // go right
            node.right = this.putNode(node.right, val);
        } 
        node.N = this.sizeOf(node.left) + this.sizeOf(node.right) + 1;
        return node;
    }

     // Implementing iterable protocol
    *[Symbol.iterator](): Generator<number> {
        yield* this.inOrderTraversal(this.root);
    }

    private *inOrderTraversal(node: Node | null): Generator<number> {
        if (node) {
            yield* this.inOrderTraversal(node.left);
            yield node.val;
            yield* this.inOrderTraversal(node.right);
        }
    }
}

class Node {
    // type definitions
    val: number;
    N: number;  // nodes in subtree rooted here
    left: Node | null;
    right: Node | null;

    // constructor
    constructor(val:number, n:number) {
        this.val = val;
        this.N = n;
    }

    public size() {
        return this.N;
    }
}

export default IndexedBinarySearchTree;
