function productSum(arr, multiplier = 1) {
    let sum = 0;

    for (const ele of arr) {
        if (Array.isArray(ele)) {
            sum += productSum(ele, multiplier + 1);
        } else {
            sum += ele
        }
    }

    return sum * multiplier;
}