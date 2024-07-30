class Person{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }

    greet(){
        return `Hi I am ${this.name} i am ${this.age} years old`
    }
    static genericGreet(){
        return `hey boy how is it going??`
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

class StudentClass extends Person{
    static count=0;
    constructor(name, age,stdId){
        super(name, age)
        this.stdId= stdId

        StudentClass.count++;
    }
    studentId(){
        return `Hi I am ${this.name} i am ${this.age} years old and my id is ${this.stdId}`
    }


}

const std= new StudentClass("test",1,123)
const std1= new StudentClass("test1",1,123)
const std2= new StudentClass("test2",1,123)
const std3= new StudentClass("test3",1,123)
const std4= new StudentClass("test4",1,123)

const abc=std.studentId();
console.log(abc);
console.log(StudentClass.count);


//static method and properties

console.log(Person.genericGreet());


class Test{
    constructor(firstname, lastname, age){
        this.firstname= firstname
        this.lastname= lastname
        this.age= age
    }

    get name(){
        return this.firstname + " " + this.lastname
    }

    set name(x){
        this.firstname = x
    }
}

const newTest = new Test("kaushik Yadav", "jallam", 27);

console.log(newTest.name);
newTest.name= "theesmarkhan"
console.log(newTest.name);



