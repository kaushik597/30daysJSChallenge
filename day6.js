//array creation and access
const names=[1,2,3,4,5]
console.log(names);
console.log(names[0],names[names.length-1]);


//array methods
const numbers=["chicha","macha","bacha"]
numbers.push("santa");
console.log(numbers,"after push");
numbers.pop();
console.log(numbers,"after pop");
//to remove first element from the array you see
numbers.shift()
console.log(numbers);
numbers.unshift("Naruto")
console.log(numbers);

//map  prathi element ki poyi manam chesi operation apply chestadi
let a=[1,2,3,4,5];
let b=a.map(x=>x*2);
console.log(b);

//filter  manam ichina condition meeda array filter chestadi
let c=[1,2,3,4,5,6,7,8,8,8,9,10]
let d = c.filter(x=>x%2==0)
console.log(d);

//reduce  generally neeku oka single value kavali anuko appudu manam reduce vadutham
// eg oka array lo anni nos add chesi dani result cheppu ante 
//we can use reduce, it takes 2 params 1 acc, array yokka element and acc ki default/initial value ivvali
//in below logic etla work aytadi ante acc= acc+first element, result stored in acc then acc+second element atla
//i.e, 0+10=10, 10+11=21,21+12=33, 33+13= 46 46+14=60, 60+15=75
let e=[10,11,12,13,14,15]
let f= e.reduce((acc,elem)=>{return acc+elem},0)
console.log(f);

//array iteration
//for
let g=[10,11,12,13,14,15,16]
for(let i=0;i<g.length;i++){
    console.log(g[i]);
}

g.forEach(ele=>console.log(ele))


//multi dimensional array
let multiDimensionalArray= [[1,2,3],[4,5,6],[7,8,9]]
console.table(multiDimensionalArray);
console.log(multiDimensionalArray[0][1]);