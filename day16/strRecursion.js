// let result='';
// const strFunction =(a)=>{
    
//     return strFunction(a);
// }
// const strResult= strFunction("lailam")
// console.log(strResult);

let result='';
function test(a){
    for(let i=a.length-1;i>=0;i-- ){
        result= result+a[i]
    }
    return result;

}

console.log(test("laila"));
let newResult='';
function strRecursion(a,index=a.length-1){
    if(index<0){
        return  newResult
    }
    newResult= newResult+ a[index];
    console.log(a, index, newResult);

    index--
    return strRecursion(a,index)
}

const value = strRecursion("staples")
console.log("recursion", value);


//check palindrome
let firstValue
function palindrome(a,index=0){
    console.log(a,index);
   if(index>(a.length)/2){
        return a +" "+ "is palindrome "
   }
   if(a[index]!=a[a.length-1-index]){
    return a +" "+ "is  not a palindrome "
}
 
   
    return palindrome(a,index+1)
    
}

const res= palindrome("civics")
console.log(res);


function anotherPalindrome(a){

    function checkPalindrome(str, start,end){
        if(start>end){
            return true;
        }
        if(str[start]!=str[end]){
            return false;
        }
        return checkPalindrome(str, start+1, end-1)
    }

    return checkPalindrome(a,0,a.length-1)? "palindrome":"not palindrome"
}

const res1= anotherPalindrome("racecar")
console.log(res1);





















function testPalindrome(a){
    function checkPalindrome(str, start,end){
        if(start>end){
            return true
        }
        if(str[start]!==str[end]){
            return false
        }
        return checkPalindrome(str, start+1, end-1)

    }
    return checkPalindrome(a,0, a.length-1)?"pali":"not a pali"
}

const res2= testPalindrome("racecar")
console.log(res2);