function rotateArray(arr,shifts){
    let first= arr.slice(0,shifts);
    let second= arr.slice(shifts);
    return [...second,...first]
}

console.log(rotateArray([1,2,3,4],1));


//merge two sorted arrays

function merge(arr1, arr2){
    let i=0, j=0;
    let newArr=[];
    while(i<arr1.length && j < arr2.length){
       if(arr1[i]<arr2[j]){
        newArr.push(arr1[i])
        i++
       }
       else{
        newArr.push(arr2[j])
        j++
       }
    }

    while(i<arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}


const arr1 = [30, 45, 67, 78];
const arr2 = [12, 40, 52, 73, 95];


console.log(merge(arr1,arr2));
