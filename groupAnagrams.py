def groupAnagrams(strs):
    anagrams = {};
    for str in strs:
        anagrams.setdefault("".join(sorted(str)), []).append(str)
    return list(anagrams.values());

                


        


print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
