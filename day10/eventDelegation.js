const listItems= document.querySelector("ul");
console.log(listItems);
listItems.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        console.log(event.target.innerText);
    }
})


const item= document.querySelector("#addItem");
item.addEventListener("click",(event)=>{
    const newItem = document.createElement("li");
    newItem.textContent="new"
    listItems.append(newItem)
})