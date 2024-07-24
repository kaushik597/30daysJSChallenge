new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        console.log("fetching some data ");
        if(!error){
        resolve({user:"sunny", age:27})
    }
    else{
        reject("something went wrong")
    }

    },1000)
}).then(function(user){
    console.log("user",user);
    return user.user
}).then(function(data){
console.log("peru",data);
}).catch((error)=>console.log(error))