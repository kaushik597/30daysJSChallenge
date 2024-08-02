//iteration


// function binarySearchIteration(a,ele){
// let low=0;
// let high = a.length-1;
// let mid;
// while(high>=low){
//     mid= Math.floor((low+high)/2)
//     console.log(low, high, mid);
//     if(ele==a[mid]){
//         return mid
//         }
        
//     else if(ele>a[mid]){
//             low=mid+1
//         }
//     else{
//             high=mid-1
//         }
// }
// return "element not found"
// }


// const value= binarySearchIteration([1,2,3,4,5,6],2);
// console.log(value);




// function binarySearch(a,ele){
//     let low=0;
//     let high=a.length-1;
//     let mid
//     while(high>=low){
//         mid= Math.floor((low+high)/2)
//         console.log(low,mid,high);
//         if(ele==a[mid]){
//             return mid
//         }
//         else if(ele> mid){
//             low=mid+1
//         }
//         else{
//             high=mid-1
//         }
//     }
//     return "ele not found"
// }

// const res= binarySearch([2,3,7,55,64,75,86,97],13);
// console.log(res);




//recursion
// let a=[1,2,4,56,77,88];
// let low=0;
// let high= a.length-1;
// let mid
// console.log(low,high);
// function binarySearchRecursion(a,low,high, ele){
//     console.log(low,high);
//     debugger;
//     if(high>=low){
//         mid= Math.floor((low+high)/2);
//         console.log(mid);
//         if(ele==a[mid]){
//             return "element is at index ==> "+mid;
//         }
//         else if(ele>a[mid]){
//           return binarySearchRecursion(a, mid+1,high)
//         }
       
//         return binarySearchRecursion(a, low, mid-1)
        

    
//     }
//     else {
//         return "element not found"
//     }
 
// }

// const recResult= binarySearchRecursion(a,low,high,4)
// console.log(recResult);


//count the occurences
let count=0;
function occurences(a,ele,index=0){
    if(index<=a.length-1){
        if(a[index]==ele){
            count= count+1

        }
        
        return occurences(a,ele,index+1)


    }
    else{
        return `${ele} occured ${count} times`
    }
    

}

const o= occurences([1,2,3,2,3,3,4,5],5,0)
console.log(o);






























