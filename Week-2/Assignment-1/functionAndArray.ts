export function max(numbers:Array<number>) {
    // your code here, for-loop method preferred
    // check code for empty input
    if (numbers.length == 0) {
        throw new Error('Invalid input: Input must be a non empty array');
    }

    let currentMax = -Infinity; // set a initial value of negative infinity
    for (let n of numbers) {  // loop through all element
        if (n > currentMax) {   // if a larger value is found
            currentMax = n;    // record that larger value
        }
    }
    return currentMax;   // return the larger value
}

export function findPosition(numbers:Array<number>, target:number) {
    // your code here, for-loop method preferred
    
    // check code for empty input
    if (numbers.length == 0) {
        throw new Error('Invalid input: Input must be a non empty array');
    }

    // return target index when matched
    for (let i = 0 ; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}

