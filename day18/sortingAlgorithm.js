function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([20,109,18,15,10,22]));


function selectionSort(arr){
    let min_index,temp;
    for(let i=0;i<arr.length-1;i++){
        min_index=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_index]){
                min_index=j
            }
        }
        temp= arr[i];
        arr[i]= arr[min_index];
        arr[min_index]=temp

    }


   
    return arr;
}

console.log(selectionSort([20,109,18,15,10,22]));

function quickSort(arr){
    if(arr.length<=1){
        return arr
    }

    else{
        let pivot=arr[0];
        let leftArr=[];
        let rightArr=[];
        for(let i=1;i<arr.length;i++ ){
            if(arr[i]<pivot){
                leftArr.push(arr[i])
            }
            else{
                rightArr.push(arr[i])
            }
        }

        return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
    }
}

console.log(quickSort([20,109,18,15,10,22]));



