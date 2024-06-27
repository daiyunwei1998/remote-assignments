/* disclaimer: I have ChatGpt write this Unit Test code
  My involvment in the following code is minimal.
*/
import IndexedBinarySearchTree from './IndexedBinarySearchTree';

describe('Testing put() and size()', () => {
  it('should initialize an empty tree', () => {
    let tree = new IndexedBinarySearchTree();
    expect(tree.size()).toBe(0);
  });

  it('should add a value to the tree', () => {
    let tree = new IndexedBinarySearchTree();
    tree.put(5);
    expect(tree.size()).toBe(1);
  });

  it('should add 3 values to the tree', () => {
    let tree = new IndexedBinarySearchTree();
    tree.put(5);
    tree.put(3);
    tree.put(7);
    expect(tree.size()).toBe(3);
  });

  it('should not add duplicate values to the tree', () => {
    let tree = new IndexedBinarySearchTree();
    tree.put(5);
    tree.put(5);
    expect(tree.size()).toBe(1);
  });
});

describe('Testing fromArray()', () => {

  test('should create a tree from an array', () => {
    let tree = new IndexedBinarySearchTree();
    const numbers = [5, 3, 7, 2, 4, 6, 8];
    const returnedTree = tree.fromArray(numbers);
    expect(returnedTree.size()).toBe(numbers.length);
  });
});


describe('Testing get()', () => {
  let tree: IndexedBinarySearchTree;

  test('get should return -1 for an empty tree', () => {
    tree = new IndexedBinarySearchTree();
    expect(tree.get(5)).toBe(-1);
  });

  test('get should return -1 for a target not found in the tree', () => {
    tree = new IndexedBinarySearchTree();
    tree.put(5);
    tree.put(3);
    tree.put(7);
    expect(tree.get(10)).toBe(-1);
  });

  test('get should return the rank of the target in the tree', () => {
    tree = new IndexedBinarySearchTree();
    tree.put(5);
    tree.put(3);
    tree.put(7);
    tree.put(2);
    tree.put(4);
    tree.put(6);
    tree.put(8);
    // Tree:        5
    //            /   \
    //           3     7
    //          / \   / \
    //         2   4 6   8

    // Test cases for known ranks
    expect(tree.get(5)).toBe(3);  // Rank of 5 is 3
    expect(tree.get(3)).toBe(1);  // Rank of 3 is 1
    expect(tree.get(7)).toBe(5);  // Rank of 7 is 5
    expect(tree.get(2)).toBe(0);  // Rank of 2 is 0
    expect(tree.get(8)).toBe(6);  // Rank of 8 is 6

    // Test for a target not in the tree
    expect(tree.get(10)).toBe(-1);  // 10 is not in the tree, so rank should be -1
  });
});


describe('Testing iterable', () => {

  test('Iterable protocol - Basic iteration', () => {
    const tree = new IndexedBinarySearchTree();
    tree.fromArray([5, 3, 7, 2, 4, 6, 8]); // Insert elements into the tree
    
    const result = [...tree]; // Spread the tree into an array
    
    expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]); // Check if iteration produces correct order
});
});