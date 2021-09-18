// O(log(n)) time 
// O(log(n))  space
function binarySearch(arr, target) {
    return binarySearchHelper(arr, target, 0, arr.length - 1)
}

function binarySearchHelper(arr, target, left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    const maybeMatch = arr[mid];

    if (target === maybeMatch) {
        return mid;
    } else if (target < maybeMatch) {
        return binarySearch(arr, target, left, mid - 1)
    } else {
        return binarySearch(arr, target, mid + 1, right)
    }
}

function binarySearchHelper(arr, target, left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    const maybeMatch = arr[mid];

    if (target === maybeMatch) {
        return mid;
    } else if (target < maybeMatch) {
        return binarySearch(arr, target, left, mid - 1)
    } else {
        return binarySearch(arr, target, mid + 1, right)
    }
}