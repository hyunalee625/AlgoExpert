// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appread in the array.
// For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. 
// Note that a single number in an array and the array itself are both valid subsequences of the array.

// Sample
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// subsequence = [1, 6, -1, 10]
// output: true

// time = O(n)  >> looping once and breaking out of it
// space = O(1) >> not storing the data anywhere else
// WHILE LOOP
function isValidSubsequence1(array, subsequence) {
    let arrIdx = 0;
    let subIdx = 0;

    while (arrIdx < array.length && subIdx < subsequence.length) {
        if (array[arrIdx] === subsequence[subIdx]) { 
            subIdx++;  // if the array[arrIdx] is equal to subsequence[subIdx] then we increment subIdx
        }
        arrIdx++;   // arrIdx increments regardless whether array[arrIdx] === subsequence[subIdx] is true or not
    }

    return subIdx = subsequence.length
}

// console.log(isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

// FOR LOOP 
function isValidSubsequence2(array, subsequence) {
    let subIdx = 0;
    for (const value of array) {
        if (subIdx === subsequence.length) {    // we need this to set boundaries (once we reach the last subIdx, we break)
        break;
        }
        if (subsequence[subIdx] === value) {
        subIdx++;
        }
    }

    return subIdx === subsequence.length
}

// console.log(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))