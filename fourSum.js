/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    
    if (nums.length <= 0) return [];
    const result = [];
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let j=0; j< n-3; j++){
        if (j > 0 && nums[j] === nums[j - 1]) continue;

        if (nums[j] + nums[j + 1] + nums[j + 2] + nums[j + 3] > target) break;
        if (nums[j] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;

        for (let i = j+1; i < n - 2; i++) {
            if (i > j + 1 && nums[i] === nums[i - 1]) continue;
            if (nums[j] + nums[i] + nums[i + 1] + nums[i + 2] > target) break;
            if (nums[j] + nums[i] + nums[n - 1] + nums[n - 2] < target) continue;
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                const sum =nums[j]+ nums[i] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[j], nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0))