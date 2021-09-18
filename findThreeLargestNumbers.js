function findThreeLargestNumbers(arr) {
    threeLargest = [null, null, null];
    for (const num of arr) {
        updateLargest(threeLargest, num);
    }

    return threeLargest;
}

function updateLargest(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num ,2);
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
        shiftAndUpdate(threeLargest, num, 0);
    }
}

function shiftAndUpdate(arr, num, i) {
    for (let idx = 0; idx <= i; idx++) {
        if (idx === i) {
            arr[idx] = num;
        } else {
            arr[idx] = arr[idx + 1];
        }
    }
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))