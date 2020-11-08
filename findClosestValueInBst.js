// Write a function that takes in a Binary Search Tree(BST) and a target integer value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Each BST node has an integer value, a left child node, and a right child node.
// A node is said to be a valid BST node if and only if it satisfies the BST property: 
// its value is strictly greater than the values of every node to its left;
// its value is less than or equal to the values of every node to its right;
// and its children nodes are either valid BST nodes themselves or None/null

// Sample
// tree = 10 
//      /    \
//     5     15
//    /\      /\
//   2  5   13  22
//  /         \
// 1           14
// target = 12
// output: 13

function findClosestValueInBst(tree, target) {
    return findClosestHelper(tree, target, Number.POSITIVE_INFINITY); // tree.value can be an infinity as well
}

function findClosestHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {   // if (|12 - infinity| > |12 - 10|)   >> true
        closest = tree.value;   // closest = 10
    }
    if (target < tree.value) {  
        return findClosestHelper(tree.left, target, tree.value)
    } else if (target > tree.value) {   // if 12 is greater than 10, we eliminate the left side of the tree and focus on the right
        // we elimite the left because the smaller the number, the greater the gap between the target and tree.value
        return findClosestHelper(tree.right, target, closest)
    } else {
        return closest;
    }
}