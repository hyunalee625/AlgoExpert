// Write a functino that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If no two numbers sum up to the target sum, the function should return a empty array.
// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the targest sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// expected: [-1, 11]

// VERSION 1
function twoNumberSum1(array, targetSum) {

    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            num2 = array[j];

            if (num1 + num2 === targetSum) {
                return [num1, num2]
            }
        }
    }

    return [];
  
}

// console.log(twoNumberSum1([3, 5, -4, 8, 11, 1, -1, 6], 10));

// VERSION 2
function twoNumberSum2(array, targetSum) {

    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            num2 = array[j];

            if (num1 + num2 === targetSum) {
                return [num1, num2]
            }
        }
    }

    return [];
  
}

console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));
