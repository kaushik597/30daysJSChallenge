// for loop
for(let i=1;i<11;i++){
    console.log(i);
}
for(let i=1; i<11;i++){
    console.log(`5*${i}=${5*i}`);
}

//while loop
let n=1;
let result=0;
while(n<11){
result=result+n;
n++
}
console.log("sum of numbers from 1-10",result);

let m=10;
while(m>0){
    console.log(m);
    m--;
}


//do while
let i=1;
do{
    console.log(i,"do while loop");
    i++
}while(i<6)


let factorial=7;
let results=1;
do{
results*= factorial;
factorial--

}while(factorial>0)

    console.log("factorial result",results);



//nested loops
// using 1 for loop
let result1="*";
for(let i=1;i<=5;i++){

    console.log(result1);
    result1=result1+" *"
}

// using 2 loops
result=""
let pattern ="*"
for(let i=1;i<=5; i++){
    for(let j=1;j<=i;j++){
        result=result+pattern
    }
    result=result+"\n"
}
console.log(result);


// 1
// 22
// 333
// 4444
// 55555
let same=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        same+=i
    }
    same= same+"\n"
}
console.log(same);

// 1
// 23
// 345

let result2=0;
let resultString=""

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        result2= result2+1;
        resultString=resultString+result2 + " ";
    }
  resultString=resultString+"\n"
}
console.log(resultString);

//fibinocci
let a="abcdedcba";
let b=a.toString().split("");
if(b.reverse().join("")==a){
  console.log("fibinocci");
}
else{
  console.log("not a fibinocci");
}



//continue
for(let i=1;i<=10;i++){
  if(i==5){
    continue;
    // console.log(i);
  }
  else{
    console.log(i);
  }
  

}

for(let i=1;i<=10;i++){
  if(i==7){
    break;
  }
  else{
    console.log(i);
  }
}