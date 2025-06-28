var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    const required = {};
    for (const char of t) {
        required[char] = (required[char] || 0) + 1;
    }

    const windowCounts = {};
    let matched = 0;
    let minLen = Infinity;
    let minWindow = "";
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowCounts[char] = Number(windowCounts[char] || 0) + 1;

        if (
            required[char] &&
            windowCounts[char] === required[char]
        ) {
            matched++;
        }

        while (matched === Object.keys(required).length) {
            const windowLength = right - left + 1;
            if (windowLength < minLen) {
                minLen = windowLength;
                minWindow = s.slice(left, right + 1);
            }

            const leftChar = s[left];
            if (required[leftChar]) {
                windowCounts[leftChar]--;
                if (windowCounts[leftChar] < required[leftChar]) {
                    matched--;
                }
            }
            left++;
        }
    }

    return minWindow;
};



/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow2 = function(s, t) {
    if (s.length < t.length) return "";
     const required = new Map();
     const windowCounts = new Map();
     for (const char of t) {
         required.set(char, (required.get(char) || 0) + 1);
     }
     const requiredUniqueCharCount = required.size;
     let left = 0;
     let matched = 0;
     let minLen = Infinity;
     let minWindow = "";
     for (let right = 0; right < s.length; right++) {
         const char = s[right];
         if (required.has(char)) {
             windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
             if (windowCounts.get(char) === required.get(char)) {
                 matched++;
             }
         }
         while (matched === requiredUniqueCharCount) {
             const windowLength = right - left + 1;
             if (windowLength < minLen) {
                 minLen = windowLength;
                 minWindow = s.slice(left, right + 1);
             }
             const leftChar = s[left];
             if (required.has(leftChar)) {
                 windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
 
                 if (windowCounts.get(leftChar) < required.get(leftChar)) {
                     matched--;
                 }
             }
             left++;
         }
     }
 
     return minWindow;
 };



console.log(minWindow("ADOBECODEBANC", "AABC"))