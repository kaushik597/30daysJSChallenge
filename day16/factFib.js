// //basic recursion

// function recursion(value){
//     let result=1
//     while(value>1){
//         result= result*value;
//         value--;
//     }
//     return result;
// }

// const result= recursion(5)
// console.log(result);
let result=1
function  factorial(n){

    if(n==1){
        return 
    }
    result= result*n;
    factorial(n-1);
    return result;
}
let a= factorial(3)

console.log(a);


// function fibinocci(n){
//     let arr=[]
//     for(let i=0;i<=n;i++){
//         if(n==0|| i==0){
//             arr.push(0)
//          }
//          else if(n==1 ||i==1){
//              arr.push(1)
//          }
//          else{
//          arr.push(arr[i-1]+arr[i-2])
//          }
//     }
//     console.log(arr);
// return arr[n];

// }

// function fibinocci(n){
//     let result;
//     let first=0;
//     let second =1;
//     if(n==0) return 0;
//     if(n==1) return 1;

//     for(let i=2;i<=n;i++){
//         result= first + second;
//         first=second;
//         second= result
//     }
//     return second
// }

function fibinocci(n){
    if(n==0) return 0;
    if(n==1) return 1;
   return fibinocci(n-1) + fibinocci(n-2)
}

const fibResultz=fibinocci(8);
console.log(fibResultz);


