const promiseOne = new Promise(function(resolve,reject){

setTimeout(function(){
    console.log("async task is happening");
},2000)
    resolve();
})

promiseOne.then(function(){
    console.log("promise is resolved");
})

const promiseTwo= new Promise(function(resolve,reject){
    let resut= true
    setTimeout(function(){
        console.log("async operation is performing");
    },2000)
    if(!resut){
        resolve()
    }
    else{
        reject("something went wrong")
    }
})

promiseTwo.then(function(){
    console.log("promise 2 resolved successfully");
}).catch(error=>console.log(error))

