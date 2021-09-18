// Write a function that takes in a non-empty array of integers that are sorted in ascending
// order and returns a new array of the same length with the squares of the original integers
// also sorted in ascending order.


// Sample 
// array = [1, 2, 3, 5, 6, 8, 9]
// output = [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(arr) {
    const sortedSquares = new Array(arr.length).fill(0);

    for (let idx = 0; idx < arr.length; idx++) {
        const val = arr[idx];
        sortedSquares[idx] = val * val;
    }

    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

console.log(arr = [1, 2, 3, 5, 6, 8, 9])

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    for (let idx = 0; idx < array.length; idx++) {
        const val = array[idx];
        sortedSquares[idx] = val * val;
    }

    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

// console.log(array = [1, 2, 3, 5, 6, 8, 9])



