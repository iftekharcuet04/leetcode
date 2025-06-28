var maxSubsequence = function(nums, k) {

    if (!Array.isArray(nums) || nums.length === 0 || k <= 0) {
        return [];
      }
      if (k > nums.length) {
        return [];
      }
      if (k === nums.length) {
        return [...nums];
      }
    const withIndex = nums.map((num, idx) => ({ num, idx }));

    withIndex.sort((a, b) => b.num - a.num);
  
    const topK = withIndex.slice(0, k);
  
    topK.sort((a, b) => a.idx - b.idx);
  
    return topK.map(({ num }) => num);
};