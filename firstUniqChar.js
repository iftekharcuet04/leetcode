var firstUniqChar1 = function(s) {
    if(s.length ==0) return -1;
    const track = trackResult(s);
    let result = -1
    for (let i =0; i<s.length; i++){
        const char = s[i];
        if(track.get(char).count ==1) {result =i; break};
    }

    return result;
    
};

const  trackResult = function (s){
  
    const result = new Map();
    for (let i =0; i<s.length; i++){
        const char = s[i];
        if(!result.has(char)){
            result.set(char, {count: 1})
        }
        else{
            const entry = result.get(char);
            entry.count++;
        }
    }

    return result;
}


var firstUniqChar = function(s) {
    if (s.length === 0) return -1;

    const counts = new Map();

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        counts.set(c, (counts.get(c) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (counts.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};

console.log(
  firstUniqChar("itwqbtcdprfsuprkrjkausiterybzncbmdvkgljxuekizvaivszowqtmrttiihervpncztuoljftlxybpgwnjb")
);



