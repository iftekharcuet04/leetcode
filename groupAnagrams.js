function groupAnagrams(strs){
    anagrams = {};   
    for (str of strs){
     key = str.split("").sort().join("");
    if (!Array.isArray(anagrams[key])) {
        anagrams[key] = [];
    }
      anagrams[key].push(str);
    }
    
    return Object.values(anagrams);
  
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))