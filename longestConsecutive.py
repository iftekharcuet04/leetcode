def longestConsecutive(nums):
    if len(nums) ==0: return 0;
    numSet = set(nums)
    longest =0;
    for num in numSet:
        if (num-1) not in numSet:
            currentNum = num;
            currentStreak = 1;
            while currentNum+1 in numSet:
                currentNum+=1;
                currentStreak+=1;
            longest = max(longest, currentStreak)
    return longest;




# print(longestConsecutive([100, 4, 200, 1, 3, 2]));
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
# console.log(longestConsecutive([]));

# console.log(longestConsecutive([100,4,200,1,3,2]))