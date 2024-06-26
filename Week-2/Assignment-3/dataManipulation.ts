/**
 * Count occurence of string in an array
 * @param {Array<string>} input array of string
 * @returns {object} output object (e.g. {a:3, b:1, c:2, x:1}), 
 *                  where keys are character, values are character counts
 */
function count(input:Array<string>) {
    // your code here
    let output = {}; //create empty output object
    for (const char of input) {
        if (output.hasOwnProperty(char)) {
            output[char] += 1;   // if this char has any record, increment by 1
        } else {
            output[char] = 1;   // else store it in object with initial value of 1
        }
    }
    return output;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

/**
 * : return an object which shows the summed-up value of each key.
 * @param {Array<object>} input array of objects
 * @returns {object} return object, keys are characters, 
 *                  values are accumulated sum for that character
 */
function groupByKey(input: Array<object>) {
    // your code here
    let output = {}; //create empty output object
    for (const obj of input) {
        if (output.hasOwnProperty(obj['key'])) {
            output[obj['key']] += obj['value'];   // if this char has any record, accumulate it
        } else {
            output[obj['key']] = obj['value'];   // else store it in object
        }
    }
    return output;

}

let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
