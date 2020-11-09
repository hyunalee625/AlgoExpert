// The distance between a node in a Binary Tree and tree's root is called the node's depth.
// Write a function that tkaes in a Binary Tree and returns the sum of its node's depths.
// Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes themselves or None/null.

// Sample 
// tree =    1 
//        /     \
//       2       3
//     /   \    /  \
//    4     5  6    7
//   / \ 
//  8   9 

// output: 16

// time: O(n)
// space: O(h) >> depth of the Binary Tree
// Iterative approach
function nodeDepths1(root) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        if (node === null) continue;    // once we pop it that node will no longer exist, therefore it will be node === null
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1})
        stack.push({node: node.right, depth: depth + 1})
    }

    return sumOfDepths;
}

// time: O(n)
// space: O(h)
// Recursive approach
function nodeDepths2(root, depth = 0) {
    if (root === null) return 0;    // we need to handle the base case
    // if the root is a null value, we simply return 0
    return depth + nodeDepths2(root.left, depth + 1) + nodeDepths2(root.right, depth + 1)
}