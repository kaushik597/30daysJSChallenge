sessionStorage.setItem("name","kaushik")
console.log("session storage value", sessionStorage.getItem("name"));

const obj1={
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown"
    }
  }

  sessionStorage.setItem("obj",JSON.stringify(obj1));
  const sessionObjValue= sessionStorage.getItem("obj")
  console.log("session object", JSON.parse(sessionObjValue));
  let fname, femail

  document.querySelector("#uname").addEventListener("change", (e)=>{
    e.preventDefault();
    fname= e.target.value;
  });
  document.querySelector("#email").addEventListener("change",(e)=>{
    femail= e.target.value;
  })
  document.querySelector("#submit1").addEventListener("click", submitButton);
 



  function submitButton(){
    console.log(fname, femail);
    
    sessionStorage.setItem("form_name",fname);
    sessionStorage.setItem("form_email",femail)
    setTimeout(()=>{},5000)
  }

  window.addEventListener("DOMContentLoaded",(e)=>{
    document.querySelector("#sname").textContent=sessionStorage.getItem("form_name");
    document.querySelector("#semail").textContent=sessionStorage.getItem("form_email");
    
  })

//   console.log("befor session",sessionStorage.getItem("form_name"), sessionStorage.getItem("form_email"));
//   console.log("fter session",sessionStorage.removeItem("form_name"), sessionStorage.removeItem("form_email"));
  
  
  