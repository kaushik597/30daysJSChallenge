// es6 features


//template literals
let name="hitesh"
let age="33"

let guru= `${name} is doing a great job at ${age}`;
console.log(guru);

let multiLineString = `Anna namaste
    sai anna namaste
`

console.log(multiLineString);

//destructuring: destructuring assignment syntax is a js expression that makes it possible to unpack values from arrays or properties from objects into distinct variables
const [a,b]=["akshay","hitesh","naveen","kaushik"]
const [c,,d]=["asdf",'fgh',"ijk"]
console.log(a,b,c,d);


const book={title:"sadisdham",author:"Kaushik"}

const {title,author} = book
console.log(title,author);


//spread and rest operator
/* spread: spread operator is used for expanding iterables like arrays into individual elements
eg: let a=[1,2,3,4]
if  you want to create a new array b with elements of a and other elements you can do it using spread operator
let b=[...a,5,6,]
b will be [1,2,3,4,5,6]

rest: rest works opposite to spread. rest condenses them in to single entity mostly used in array destructuring or in function destructuring
eg const [a, ...rest]=[1,2,3,4,5,6,7,8]
if you log a , rest you see a=1 and rest=[2,3,4,5,6,7,8]  




*/

const arr=[5,6]
const newArr=[1,2,3,...arr]

console.log(newArr);
const sum =(...numbers)=>{
return numbers.reduce((res,num)=>{return res=res+num},0)
}

console.log(sum(1,2,3,4,5,5,6,7,8,8)
);

//default parameters

/* Default parameters allow named parameters to be initialized with a default value if no value or undefined is passed */

const product=(a,b=22.3)=>{
    return a*b
}
console.log(product(4,2));
console.log(product(1));

//enhanced object literal:
/* Enhanced object literal is used to group variables in global scope into an object. It is a process of restructuring or putting them back together*/

let naam="Naruto uzumaki"
const about=()=>{

    return `I will be like ${naam}`
}

const aspire={naam,about}
console.log(aspire.naam, aspire.about());

let key1="appadam"
let key2="guthi vankaya"


const test={
    [key1]:"avakaya",
    [key2]:"pulav"
}

console.log(test);