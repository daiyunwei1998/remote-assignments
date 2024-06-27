This assginment contains two tasks.

# Binary Search
> Given a sorted array, return the index of target number.


Interesting fact: Why use `let mid = left + (right - left) / 2;` 

https://dev.to/matheusgomes062/a-bug-was-found-in-java-after-almost-9-years-of-hiding-2d4k

# Binary Search Tree
## Why BST?
You know what? task 1 is too easy. 
- What if the array is not sorted?
    
     Like most real life data, nothing is organized, just like my room.

- What if the data is streaming?

    The data don't all come at once. We should figure out a data structure that stores everything, can be updated from time to time, that support easy query with a decent performance.

Introducing **Indexed Binary Search Tree**. This is a data structure that specialize in comparison based query with a runtime of `theta(logN)`.
## Task description

> given a unsorted array, return a BST object. that support the following APIs.
* get(target:number): return the rank of target number in BST, return -1 if BST doesn't contain the number
* put(val: number): put a number into the BST
* size(): get the total size of that BST

Let's make it more interesting. It should also be a iterable ! Happy coding :)

## Discussion
I used a trival implementation of getNode() helper method, and I admit it's not the most reader-friendly solution.

The trouble is that I want to merge two common operation in BST into one single function: rank() and get().

In textbook definition, rank() will returns how many values in BST are smaller than the queried key. get()is actually more commonly used in Tree Map which will return a value for a query key. contains() is the TreeSet version that will only tells you whether the key is in Tree. If not, a return value of -1 is expected.

I tried to implement a mixture of contains() and rank() in this task, that will give you the index(rank) of a query key, and -1 if the key is not found in tree. Since we're using a recursive logic, it is crucial to point out that as far as I know, there's no way to have a single return value that can make this happen.

My solution is to make the helper function return a number array, the first element is used to flag whether the value if not found, and the second element tells you the index if it's found.

This implementation is not reader-friendly, but it make sure we can get all the information in one pass. Thus, a BST performance is guaranteed. If not, we have to call contain() first (logN runtime), and rank() later (2logN runtime because of recursion). This is much slower, but the code is better maintained.
```{javascript}
private getNode(node:Node, target:number):Array<number| null> {
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
```

