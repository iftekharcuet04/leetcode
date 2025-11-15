var containsDuplicate = function(nums) {
    const busket = new Set();
    let result = false;
    for (i=0; i <nums.length; i++){
        if(busket.has(nums[i])) 
        { result = true; break;}
        else 
         busket.add(nums[i]);
    }

    return result;

};