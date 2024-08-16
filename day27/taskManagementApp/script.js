const tasks=[]
const taskContainer = document.querySelector("#task-container");
const p= document.createElement("p");
const modalContent = document.querySelector('.modal-content')
let showBtn
// const childTask = document.createElement("div");
// childTask.setAttribute("id","childtask")
// taskContainer.append(childTask)

if(tasks.length==0){
    p.textContent="No tasks  for today please add using below form"
    taskContainer.appendChild(p)
}
const dt= document.querySelector("#date");
const title=document.querySelector('#title')
const desc= document.querySelector("#desc")
const submit= document.querySelector("#submit")
submit.addEventListener("click",(event)=>{
    event.preventDefault()
    tasks.push({"title":title.value,"description":desc.value,"date":dt.value})
    if(tasks.length>0){
    //    taskContainer.removeChild(p)
    p.textContent=''
    }
    console.log("tasks",tasks);
    displayTask(title.value)
    // showTaskModal()
    console.log("showbtn",showBtn);

   
})

function displayTask(titleValue){
    const firstDiv= document.createElement("div");
        //creating checkbox and show button
//input
    const div= document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id",titleValue);
    input.setAttribute("name",titleValue);
    input.setAttribute("value","")
    const label = document.createElement("label");
    label.setAttribute("for",titleValue);
    label.textContent=titleValue
    div.appendChild(input);
    div.appendChild(label)
    firstDiv.appendChild(div);
    //show btn
     showBtn= document.createElement("button");
    const idValue=titleValue+ Math.floor(Math.random()*5);
    console.log(idValue);
    
    showBtn.setAttribute("id",idValue)
    showBtn.textContent="Show task"
    firstDiv.appendChild(showBtn)
    taskContainer.appendChild(firstDiv)
    firstDiv.style.display="flex"
    firstDiv.setAttribute("id","firstDiv")

    title.value='';
    desc.value='';
    dt.value=''
    const showTask=document.querySelector(`#${idValue}`)
    // showTask.addEventListener("click",openModal())
    // console.log("^^^^^^^^^^^^",test);
    

}
// while(!showBtn){
//     console.log("outside",showBtn);

// }

showBtn.addEventListener("click",openModal())
function openModal(){

    // const div= document.createElement("div");
modalContent.style.display="block"

}



//implemented till clicking button that will generate tasks with a button upon clicking show button it should show modal but that isnt working properly
