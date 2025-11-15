var containsNearbyDuplicate = function(nums, k) {
    const busket=  new Map();
    let result = false;
    for (i=0; i <nums.length; i++){
        if(busket.has(nums[i]) && Math.abs(busket.get(nums[i])-i) <=k) 
        { result = true; break;}
        else {
            busket.set(nums[i], i);
        }
         
    }

    return result;
};


var containsNearbyDuplicate = function(nums, k) {
    const busket=  new Set();
    let result = false;
    for (i=0; i <nums.length; i++){
        if(busket.has(nums[i])) 
        { result = true; break;}
        else {
            busket.add(nums[i], i);
        }

        if(busket.size>k){
            busket.delete(nums[i-k])
        }
         
    }

    return result;
};