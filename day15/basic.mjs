import { collectionList, addItems, removeItems } from "./moduleExample.mjs";


function outer(){
    const alpha="alphaaa";

    function inner(){
        console.log(alpha);
    }
return inner;
    
}

const value = outer();


//task2

function task2(){
    let counter=0;
    function increaseCounter(val){
        console.log(counter+=val);
    }

    return {increment(){
        return increaseCounter(1)
    }
}
}
const t= task2();
t.increment()
t.increment()


//practical closures
//3
function practical(){
    let count =0;
    function generateId(){
        const id= Math.floor(Math.random()*100)
        count++; 
        console.log("count:",count,"random id:",id);


    }
    return {
        increment(){
           generateId();
        }
    }

}

const p =practical();
p.increment();
p.increment();
p.increment();
p.increment();
p.increment();
p.increment();

//4

function greet(){
    return function(x){
        console.log(`Hi ${x} how are you doing`);
    }

}


const g = greet();
console.log(g("kaushik"));

//closures in loops
//5


function loopExample(){
    let arr=[]
    for(let ind=0; ind<10;ind++){
        // console.log(ind);
        arr.push(function (){
            console.log("test funxtion ",ind);
        })
  
    
    }
    return arr;
    
}
const loop = loopExample();
loop.map(x=>x())

addItems("add chesa");
console.log(collectionList);
removeItems();
removeItems();
console.log(collectionList);


//memoization
function outerMemo(){
    let cache={}
    return function innerMemoization(a,b){
        let key= `${a},${b}`
        if(key in cache){
            console.log("values are coming from cache", cache[key]);
        }
       
        else{
            let result=a*b;
            cache[key]= result;
            console.log("updating cache",cache);
            return result
        }

    }
}

const abcMemo = outerMemo()
const resultMemo = abcMemo(2,3);
console.log(resultMemo);
const resultMemo1 = abcMemo(3,3);
console.log(resultMemo1);
const resultMemo2 = abcMemo(3,3);
console.log(resultMemo2);
const resultMemo3 = abcMemo(3,3);
console.log(resultMemo3);
const resultMemo4 = abcMemo(3,4);
console.log(resultMemo4);


//factorial cache

function outerFactorial(){
    let cache={}
    return function innerFactorial(val){
        let key= val;
        if(key in cache){
console.log("value is coming from cache");
        }
        else{
            let result=1;
            for(let i=val; i>=1; i--){
                console.log(result);
                result= result*i;
                val--
            }
            cache[key]= result;
            console.log("updated the cache", cache);
            return result;
        }

    }
}

const fact= outerFactorial();
const factResult= fact(5);
console.log(factResult, "factorial of 5");
const factResult1= fact(5);
const factResult2= fact(5);
const factResult3= fact(2);