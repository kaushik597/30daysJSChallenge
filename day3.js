// write a program to check if a number is positive negative or zero

const checkNumber =(a)=>{
if(a>0){
    console.log("positive");
}
else if(a<0){
    console.log("negative");
}
else{
    console.log("zero");
}
}

checkNumber(10);
checkNumber(-19);
checkNumber(0);


const voteEligibility =(age)=>{
if(age>=18){
    console.log("eligibile to vote");
}
}

voteEligibility(20);



// nested if else statements

const largestOfThreeNumbers = (num1,num2,num3)=>{
    let max;
    if(num1 > num2){
        max=num1;
        if(max >num3){
            max=num1;
            console.log("maximum number:",max);
        }
        else{
            max=num3;
            console.log("maximum number:",max);

        }

    }
    else{
        max=num2;
        if(max >num3){
            max=num2;
            console.log("maximum number:",max);

        }
        else{
            max=num3
            console.log("maximum number:",max);

        }
    }

}

largestOfThreeNumbers(10,20,3)



//switch case
//write a program to that uses a switch case to determine the day of week based on a number (1-7) and log the day name to console.
const findDayOfWeek=(day)=>{
switch(day){
    case 1:
        console.log("monday");
        break;

    case 2: 
    console.log("tuesday");
    break;

    case 3:
        console.log("wednesday");
        break;

    case 4:
        console.log("thursday");
        break

    case 5:
        console.log("friday");
        break

    case 6:
        console.log("saturday");
        break

    case 7:
        console.log("sunday");
        break

}
}

findDayOfWeek(7);

const grade = (score) => {


  switch (true) {
    case (score >= 90 && score <= 100): {
      console.log("grade A:", score);
      break;
    }
    case score >= 80 && score < 90: {
      console.log("grade B:", score);
      break;
    }
    case score >= 70 && score < 80: {
      console.log("grade C:", score);
      break;
    }

    case score >= 60 && score < 70: {
      console.log("grade D:", score);
      break;
    }
    case score >= 50 && score < 60: {
      console.log("grade F:",score);
      break;
    }

  }
};

grade(85);



// ternary operator
const evenOrAdd =(no)=>{
    (no%2 ==0)?console.log("even"):console.log("odd");

}

evenOrAdd(11)


//combine conditions
const checkLeapYear=(year)=>{
    if((year%4==0 && year%100!=0)||year%400 ==0){
        console.log("leap year");
    }
    else{
        console.log("not a leap year");
    }

}

checkLeapYear(2015)
