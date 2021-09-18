// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
// Each Binary Tree node has an integer value, a left child node, and a right child node.
// Children nodes can either be BinaryTree nodes themselves or None/null.

// Sample
// tree =    1 
//        /     \
//       2       3
//     /   \    /  \
//    4     5  6    7
//   / \   /
//  8   9 10    

// output: [15, 16, 18, 10, 11]

function branchSums(root) {
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;  // we don't want to add node.value on none so we just return

    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}

function branchSums(root) {
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;  // we don't want to add node.value on none so we just return

    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}
