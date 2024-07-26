const person ={
    name:"kaushik",
    age:27,
    email:"test@test.com",
    details: function (){
        return `Hi I am ${this.name} my email is ${this.email} and i am ${this.age} years old`
    }
    
}

export default person;