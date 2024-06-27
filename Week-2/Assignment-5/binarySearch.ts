/**
 * Binary Search a sorted numbers array, return the index of queried number, or -1 if not found
 * @param {Array<number>} numbers sorted number array
 * @param {number} target query number
 * @returns {number} target number index or -1
 */
function binarySearchPosition(numbers: Array<number>, target:number) {
    // your code here
    let left = 0;  // search segment left end
    let right = numbers.length -1;  // search segmnt right end
    // creating a split point 
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); 
        if (target == numbers[mid]) {
            return mid;
        } else if (target > numbers[mid]) {
            left = mid + 1;
        } else if (target < numbers[mid]) {
            right = mid - 1;
        }
    }
    return -1; // return -1 (not found) if the array is exausted
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3