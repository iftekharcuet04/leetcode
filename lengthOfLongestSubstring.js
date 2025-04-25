function lengthOfLongestSubstring(s){
    if (s.length ==0) return "";
    let temp ="";
    let result = {};
    let maxLength = 0;

    for (c of s){
        if(temp.includes(c)){
            const length = temp.length;
            if(length > maxLength){
                result = {};
                result[temp] = length
            }
            maxLength = Math.max(length, maxLength);   
            temp = "";
        }
        else{
            temp+=c;

        }
    }
    return   maxLength;
}




console.log(lengthOfLongestSubstring("abcabcbb"))