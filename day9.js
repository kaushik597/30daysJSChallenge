//selecting and manipulating elements

const test= document.getElementById("heading");
console.log(typeof(test));
console.log(test.innerText);

const btn= document.getElementsByClassName("sub");// querySelector(".sub")
console.log(typeof(btn[0]));
btn[0].style.backgroundColor="red"

//creating and appending elements
const body= document.querySelector("body");
const div= document.createElement("div")
div.textContent="Anna namaste malla ochina"
body.append(div)

const li = document.createElement("li");
li.textContent="I am in unordered list";
const li2= document.createElement("li")
li2.textContent="All is well";
const ul=document.querySelector("ul")
ul.append(li)
ul.append(li2)
// li2.remove()
ul.removeChild(li2)

const length=body.childElementCount;
console.log("length",length);
// body.removeChild(body.children[8])


const anchor= document.querySelector("a")
anchor.setAttribute("href","https://www.facebook.com/")

const first= document.querySelector("p");
first.setAttribute("id","test")

const second = document.querySelector("span");
second.setAttribute("id","test2")

// second.removeAttribute("id")

// const btn=document.querySelector(".sub");

function changeme(e){
console.log(e,"mmmm");
    first.innerText="nenu maripoya dhora"
}

function over(e){
    second.setAttribute("class","marpu")
}
