//task1  save value to local storage and retreive it log the retrieved value
localStorage.setItem("name","kaushik");
const t1= localStorage.getItem("name");
console.log(t1);
localStorage.removeItem("name");
localStorage.removeItem("t1")


const obj={
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown"
    }
  }

  localStorage.setItem("task2",JSON.stringify(obj))
  const values= localStorage.getItem("task2");
    console.log(JSON.parse(values));
    localStorage.removeItem("task2")
    



    //Activity 2
    const name1= document.querySelector("#uname");
    const email= document.querySelector("#email")
    const btn= document.querySelector("#submit");
    name1.addEventListener("change", (e)=>{
        e.preventDefault()
        nameValue= e.target.value;
        console.log(e.target.value);
    });
    email.addEventListener("change",(e)=>{
        emailValue= event.target.value;
        console.log(emailValue);
    });
    btn.addEventListener("click",()=>{
        localStorage.setItem("form_name",`${nameValue}`)
        localStorage.setItem("form_email",`${emailValue}`)
    
    });
    let nameValue="", emailValue="";



console.log("befor");
console.log(localStorage.getItem("form_name"), localStorage.getItem("form_email"));
console.log("after");

// console.log(localStorage.removeItem("form_name"),localStorage.removeItem("form_email"));





function show(){
    console.log("show function");
    
    document.querySelector("#name1").textContent=localStorage.getItem("form_name");
    document.querySelector("#mail1").textContent=localStorage.getItem("form_email");

}