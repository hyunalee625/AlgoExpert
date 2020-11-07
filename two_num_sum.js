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
// time = O(n) >> n represents the lenght of our input array
// we're constantly traversing thru the hash just doing calculations
// space = O(n) >> we are adding value to the hash table
function twoNumberSum2(array, targetSum) {
    let nums = {};

    for (const num of array) {
        let otherNum = targetSum - num;
        if (otherNum in nums) { // if otherNum is found in nums hash
            return [otherNum, num]
        } else {
            nums[num] = true;   // we can store it as whatever
        }
    }

    return [];
}

// console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));

// VERSION 3
// time = O(n log(n)) 
// space = O(1) >> constant, we didn't add anything to the hash like VERSION 2
function twoNumberSum3(array, targetSum) {
    array.sort((a, b) => a - b);    // [ -4, -1, 1, 3, 5, 6, 8, 11 ]
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }

    return [];
}

console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10));
