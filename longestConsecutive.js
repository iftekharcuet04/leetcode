function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let longest = 0;
    for (let num of numSet) {   
    if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
        while (numSet.has(currentNum + 1)) {
            currentNum++;
            currentStreak++;
            console.log("currentStreak", currentStreak);
        }
    longest = Math.max(longest, currentStreak);
    }
    }
return longest;
}

// Example Usage
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (1,2,3,4)
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Output: 9 (0-8)
// console.log(longestConsecutive([])); // Output: 0

// console.log(longestConsecutive([100,4,200,1,3,2]));