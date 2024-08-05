function linearSearch(arr,num){
    let left=0;
    let right= arr.length-1;
    let position=-1;

    while(left<=right){
        if(arr[left]==num){
            position=left;
            return `element found at ${position} indes`
            break;
        }
        if(arr[right]==num){
            position=right;
            return `element found at ${position} indes`
            break;
        }
        left++;
        right--;
    }

    return `element not found`
       

}
console.log(linearSearch([1,2,3,4,5,6,7],8));



//binary search

function binarySearch(arr,x){
    let low=0;
    let high=arr.length-1;
    let mid;

    while(high>=low){
        console.log(low, high, mid);

        mid= Math.floor((high+low)/2)
        if(arr[mid]==x){
            return `element found at ${mid} index`;
        }

        else if(x<arr[mid]){
            high=mid-1;
        }
        else{
            low=mid+1
        }
        low
    }
    return "element not found using binary search"
}
console.log(binarySearch([1,2,3,4,5,6,7],8));


