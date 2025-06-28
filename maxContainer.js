var maxArea = function(height) {
    if(height.length<=1) return 0;
    if(height.length<=1) return Math.min(height[0],height[1]);
    let max = 0;
    let left =0;
    let right = height.length - 1;
    while(left < right){
     const width = right - left;
     const area = Math.min(height[left],height[right])*width;
     max = Math.max(area, max);
     if (height[left] < height[right]) {
        left++;
     } else {
        right--;
     }
    } 
    return max;
};


console.log(maxArea([1,8]));