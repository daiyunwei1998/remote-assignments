/* Author: Yunwei Dai, 2024/6/17
    Remote Learning Assignment, Week 1, Task 3 */
/**
 * count how many ‘a’ and ‘b’ letters are in the given input and return the total number.
 *
 * @param input - An array of string
 * @returns an int specifying the total counts of 'a' and 'b' character
 */
function countAandB(input) {
    var count = 0; // initiate count
    input.forEach(function (character) {
        if (character === "a" || character === "b") {
            count += 1; // if matched, increment count by one
        }
    });
    return count;
}
/**
 * convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on.
 *
 * @param input - An array of string
 * @returns an array of int where each letter is converted to a number
 */
function toNumber(input) {
    var offset = 96; // offset the return int by 96 since 'a' has a ascii value of 97
    return input.map(function (character) { return character.charCodeAt(0) - offset; });
}
/* Test the functions using the followiing example */
var input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]
var input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
