class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function buildTree(arr) {
    if (!arr.length) return null;
  
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
  
    while (queue.length && i < arr.length) {
      const node = queue.shift();
      console.log("arr[i]", arr[i])
      if (i < arr.length && arr[i] != null) {
        
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
      i++;
  
      if (i < arr.length && arr[i] != null) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
      i++;
    }
  
    return root;
  }
  
  function maxDepth(root) {
    if (!root) return 0;
  
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  const arr = [3,9,20,null,null,15,7];

const root = buildTree(arr);
console.log("root", root);

console.log(maxDepth(root));  // Output: 3
