let result=0;
function sum(a){
    console.log(a);
    if(a.length ==0){
        return
    }
    result= result+ a.pop();
    sum(a)
    return result

}

const s = sum([1,2,3,4,5,6,7,8,9,10])
console.log(s);

// let max
// function findMax(b){
//     if(b.length == 0){
//         return
//     }

//     let ele= b.pop();
//     if(max){
//         if(max<ele){
//             max=ele
//         }
//     }
//     else{
//         max=ele
//     }
//     findMax(b)
    
//     return max

// }

function findMax(arr, index=0, max=-Infinity){
    if(index===arr.length){
        return max
    }
    if(arr[index]>max){
        max= arr[index]
    }

    return findMax(arr,index+1, max)
}

const m = findMax([100,2,8,11,3,6])
console.log(m);

