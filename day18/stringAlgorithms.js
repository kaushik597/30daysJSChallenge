//character count
function characterCount(str){
    let chrcount={}

    for(ch of str){
        if(!chrcount[ch]){
            chrcount[ch]=1
        }
        else{
            chrcount[ch]++
        }
    }

    return chrcount
}

console.log(characterCount("walmart"));


//longest substring without repeating characters

function findSubstr(s){
    let left=0,maxLength=0,start=0;
    let maxString="";
    let set=new Set();
    for(let right=0;right<s.length-1;right++ ){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++
        }
        set.add(s[right]);
        if(right-left+1>maxLength){
            maxLength=right-left+1;
            start=left;
        }
    }
    maxString=s.substring(start,start+maxLength)
    return maxString;
}
console.log(findSubstr("abcbcd"));


