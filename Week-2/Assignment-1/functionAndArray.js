"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = max;
exports.findPosition = findPosition;
/**
 * Find the max number in an array
 * @param {Array<number>} an input array of numbers
 * @returns {number} max number in the array
 */
function max(numbers) {
    // your code here, for-loop method preferred
    // check code for empty input
    if (numbers.length == 0) {
        throw new Error('Invalid input: Input must be a non empty array');
    }
    var currentMax = -Infinity; // set a initial value of negative infinity
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { // loop through all element
        var n = numbers_1[_i];
        if (n > currentMax) { // if a larger value is found
            currentMax = n; // record that larger value
        }
    }
    return currentMax; // return the larger value
}
/**
 * Description
 * @param {Array<number>} input array of numbers
 * @param {number} target number
 * @returns {number} index of target number's first occurence, return -1 if not found
 */
function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    // check code for empty input
    if (numbers.length == 0) {
        throw new Error('Invalid input: Input must be a non empty array');
    }
    // return target index when matched
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}
