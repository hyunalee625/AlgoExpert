// O(log(n)) time 
// O(log(n))  space

function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    const pending = array[mid];

    if (target === pending) {
        return mid;
    } else if (target < pending) {
        return binarySearch(array, target, left, mid - 1)
    } else {
        return binarySearch(array, target, mid + 1, right)
    }
}


console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))



// function binarySearch(arr, target) {
//     return binarySearchHelper(arr, target, 0, arr.length - 1)
// }

// function binarySearchHelper(arr, target, left, right) {
//     if (left > right) return -1;
//     const mid = Math.floor((left + right) / 2);
//     const maybeMatch = arr[mid];

//     if (target === maybeMatch) {
//         return mid;
//     } else if (target < maybeMatch) {
//         return binarySearch(arr, target, left, mid - 1)
//     } else {
//         return binarySearch(arr, target, mid + 1, right)
//     }
// }
