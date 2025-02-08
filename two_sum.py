def twoSum(nums, target):
    num_indices = {}
    for index, num in enumerate(nums):
        complement = target - num
        if complement in num_indices:
            return [num_indices[complement], index]
        num_indices[num] = index
    return []

        
nums=[3,3]; target = 6
print(twoSum(nums, target))
            


        
