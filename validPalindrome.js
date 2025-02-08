var isPalindrome = function(s) {
    newStr=[];
    for (char of s){
        if(isAlphanumericChar(char)){
            newStr.push(char.toLowerCase());
        }
    }
    joinsrt="";
    for (i=newStr.length-1; i>=0; i--){
        joinsrt+= newStr[i];
    }
    console.log(joinsrt);
    return newStr.join("")==joinsrt;
};

function isAlphanumericChar(char) {
    return (char >= 'a' && char <= 'z') || 
           (char >= 'A' && char <= 'Z') || 
           (char >= '0' && char <= '9');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))