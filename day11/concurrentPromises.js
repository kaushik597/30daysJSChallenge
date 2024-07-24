
//it takes iterable of all promises and returns a single promise. the returned promise is fulfilled when all the promises are fulfilled
const promise1 = Promise.resolve(5)
const promise2= 42;
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('abc')
    },1000)
})

Promise.all([promise1,promise2,promise3]).then(value=>console.log(value))

//promise.race() //which ever promise fulfills first then promise is returned

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("first response 1000 milli seconds")
    },1000)
})

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("second response 2000")
    },2000)
})

Promise.race([promise4,promise5]).then(value=>console.log(value))