/**
 * Count occurence of string in an array
 * @param {Array<string>} input array of string
 * @returns {object} output object (e.g. {a:3, b:1, c:2, x:1}),
 *                  where keys are character, values are character counts
 */
function count(input) {
    // your code here
    var output = {}; //create empty output object
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (output.hasOwnProperty(char)) {
            output[char] += 1; // if this char has any record, increment by 1
        }
        else {
            output[char] = 1; // else store it in object with initial value of 1
        }
    }
    return output;
}
var input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
/**
 * : return an object which shows the summed-up value of each key.
 * @param {Array<object>} input array of objects
 * @returns {object} return object, keys are characters,
 *                  values are accumulated sum for that character
 */
function groupByKey(input) {
    // your code here
    var output = {}; //create empty output object
    for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
        var obj = input_2[_i];
        if (output.hasOwnProperty(obj['key'])) {
            output[obj['key']] += obj['value']; // if this char has any record, accumulate it
        }
        else {
            output[obj['key']] = obj['value']; // else store it in object
        }
    }
    return output;
}
var input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
