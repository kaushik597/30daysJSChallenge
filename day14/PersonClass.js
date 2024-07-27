class Person{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }

    greet(){
        return `Hi I am ${this.name} i am ${this.age} years old`
    }
}

const ka= new Person("sunny",10);
const msg=ka.greet()
console.log(msg);

ka.updateAge=function(newAge){
this.age= newAge
}
// console.log(ka.updateAge(11));
ka.updateAge(22);
console.log(ka);

