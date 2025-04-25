var isValidBST = function(root, left = null, right = null) {
    if (!root) return true; // empty tree is also valid BST
    if ((left !== null && root.val <= left) || (right !== null && root.val >= right)) {
        return false;
    }

    return isValidBST(root.right, root.val, right) && isValidBST(root.left, left, root.val);
};