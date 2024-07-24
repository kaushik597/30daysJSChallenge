const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let result= true;
        if(!result){
            console.log("test");
            resolve({username:"jsThop", age:10, password:"123"})
        }
        else{
            reject("couldnt bring the data from server")
        }
    },2000)
})

async function fetchData(){
    try {
        const abc= await promise1;
        console.log(abc);
    } catch (error) {
        console.log(error);
    }
 
}

fetchData();