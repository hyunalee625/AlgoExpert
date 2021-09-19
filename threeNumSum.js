// O(n^2) time
// O(n) space

function threeNumSum(arr, targetSum) {
    arr.sort((a, b) => a - b);

    const triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];
            if (currentSum === targetSum) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if(currentSum > targetSum) {
                right--;
            }
        }
    }

    return triplets;
}

console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0))