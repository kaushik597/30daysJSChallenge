const pr= new Promise(function(resolve,reject){
    const random = Math.floor(Math.random()*9)
    if(random<5){
        resolve(random)
    }
    else{
        reject("error ra buhaha")
    }
})
pr.then(r=>console.log(r)).catch(e=>console.log(e))


//async
async function withAsyn(){
try{
const a = await pr;
console.log(a,"try block aync await");
}catch(e){
    console.log("catch block async await ",e);
}
}

withAsyn()

