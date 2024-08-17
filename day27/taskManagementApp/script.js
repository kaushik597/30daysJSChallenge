const tasks=[];
let taskIndex=0;
const taskContainer = document.querySelector("#task-container");
const p= document.createElement("p");
const modalContent = document.querySelector('.modal-content')
let showBtn;
let editBtn;
let showTaskCount=0;
// let editId;



if(tasks.length==0){
    p.textContent="No tasks  for today please add using below form"
    taskContainer.appendChild(p)
}
const dt= document.querySelector("#date");
const title=document.querySelector('#title')
const desc= document.querySelector("#desc")
const submit= document.querySelector("#submit")
const update= document.querySelector("#update")
submit.addEventListener("click",(event)=>{
    
    event.preventDefault()
    tasks[taskIndex]={"title":title.value,"description":desc.value,"date":dt.value}
    if(tasks.length>0){
    //taskContainer.removeChild(p)
    p.textContent=''
    }
    console.log("tasks",tasks);
    displayTask(tasks[taskIndex])
    //showTaskModal()
    console.log("showbtn",showBtn);

   taskIndex++
})

function displayTask(task){
    console.log("task",task.title);
    
    const firstDiv= document.createElement("div");
//creating checkbox and show button
//input
// for(let i=0;i<tasks.length;i++){
    const div= document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id",task.title);
    input.setAttribute("name",task.title);
    input.setAttribute("value","")
    const label = document.createElement("label");
    label.setAttribute("for",task.title);
    label.textContent=task.title
    div.appendChild(input);
    div.appendChild(label)
    firstDiv.appendChild(div);
    //show btn
    showBtn= document.createElement("button");
    const idValue=task.title.replace(/\s/g, '')+ Math.floor(Math.random()*5);
    console.log(idValue);
    showBtn.setAttribute("id",idValue)
    showBtn.textContent="Show task";
    firstDiv.appendChild(showBtn)
    editBtn= document.createElement("button");
    let editId= task["title"].replace(/\s/g, '')+"edit"+Math.floor(Math.random()*6)
    editBtn.setAttribute("id",editId);
    editBtn.textContent="edit task";
    firstDiv.appendChild(editBtn);

    taskContainer.appendChild(firstDiv)
    firstDiv.style.display="flex"
    firstDiv.setAttribute("id","firstDiv")
    title.value='';
    desc.value='';
    dt.value=''
    const showTask=document.querySelector(`#${idValue}`)
    showTask.addEventListener("click",()=>openModal(task.title,task.description,task.date))
    const editTask = document.querySelector(`#${editId}`);
    editTask.addEventListener("click",()=>editModal(tasks,editId))

}
    
// }

function openModal(titleValue,descValue,dtValue){
    showTaskCount++;
    console.log("count",showTaskCount);
    let close
    
console.log("openModal titlevalue",titleValue);
modalContent.style.display="block"
if(showTaskCount==1){
    const title= document.createElement("p");
    title.textContent=`Title: ${titleValue}`;
    const desc= document.createElement("p");
    desc.textContent=`Description: ${descValue}`;
    const dt= document.createElement("p");
    dt.textContent=`Due: ${dtValue}`
    close= document.createElement("p");
    close.textContent="X";
    close.setAttribute("id","close")
    
modalContent.appendChild(title)
modalContent.appendChild(desc)
modalContent.appendChild(dt)
modalContent.appendChild(close)

close.addEventListener("click",()=>{
    modalContent.style.display="none"
})
}

}

function editModal(tasks,id){
update.style.display="block"
console.log("edit the form and update the object",tasks,id,"---->",/*titleValue,descValue,dtValue*/);
editTitle=document.querySelector(`#${id}`).previousSibling.previousSibling.lastChild.textContent
// console.log(editTitle);
const index= tasks.findIndex(ele=>ele.title==editTitle);
console.log(index,"<--------");

const edititngTask=tasks.filter(ele=>ele.title==editTitle);
console.log(edititngTask[0].title,"*****");
title.value=edititngTask[0].title;
desc.value=edititngTask[0].description;
dt.value=edititngTask[0].date


update.addEventListener("click",(event)=>{
    event.preventDefault();
    let newTask= {"title":title.value,"description":desc.value,"date":dt.value}

    console.log("new task ---->",newTask,title,desc,dt);
    
    tasks[index]=newTask
    // title.value='';
    // desc.value='';
    // dt.value=''
    console.log(tasks);
    
})


}

//implemented till clicking button that will generate tasks with a button upon clicking show button it should show modal but that isnt working properly
