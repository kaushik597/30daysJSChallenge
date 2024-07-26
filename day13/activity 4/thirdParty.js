
const { default: axios } = require("axios");
let loadAsh= require("lodash")
let arr=[1,2,3]
let names=['a','b','v']

let result= loadAsh.concat(arr,names)
console.log(result);



async function getData(){
    try{
        const users= await axios.get("https://dummyjson.com/docs/users")
        console.log(users);
    }catch(error){
        console.log(error);
    }
}

getData()