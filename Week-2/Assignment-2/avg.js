/**
 * Calculate the average product price
 * @param {object} a data object containing property 'size' (number) and 'products' (array)
 * @returns {number} the average product price
 */
function avg(data) {
    // your code here
    // check object properties
    if (!data.hasOwnProperty('size') || !data.hasOwnProperty('products')) {
        throw new Error('Object format is inappropriate');
    }
    // get products counts
    var size = data['size'];
    var sum = data['products'].reduce(function (currentSum, product) {
        if (product.price == null) {
            throw new Error('null product price');
        }
        currentSum += product.price;
        return currentSum;
    }, 0);
    return sum / size; // get the average
}
console.log(avg({
    size: 3,
    products: [
        {
            name: 'Product 1',
            price: 100,
        },
        {
            name: 'Product 2',
            price: 700,
        },
        {
            name: 'Product 3',
            price: 250,
        },
    ],
})); // should print the average price of all products
