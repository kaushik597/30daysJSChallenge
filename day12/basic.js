// function test(){
//     try{
        
//  alpha();

// }catch(error){
//     console.log(error,"a");
// }}


// test();

//task 2 function divides 2 numbers and throws error if divided by o

function byzero(a,b){
    try {
        if(b==0){
            throw new Error("number is not divisible by 0")
        }
        else{
            result=a/b
            console.log(result);
            return result
        }
       
    } catch (error) {
        console.error(error.message);
    }
}

const by = byzero(20,0)
