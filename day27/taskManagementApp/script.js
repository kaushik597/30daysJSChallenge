
const tasks=[];
let taskIndex=0;
const taskContainer = document.querySelector("#task-container");
const p= document.createElement("p");
const modalContent = document.querySelector('.modal-content')
const modalTitle= document.querySelector("#modal-title")
const modalDesc= document.querySelector("#modal-desc")
const modalDue= document.querySelector("#modal-due");
const modalClose= document.querySelector("#close")

let showBtn;
let editBtn;
let showTaskCount=0;
let currTitleValue=''



if(tasks.length==0){
    p.textContent="No tasks  for today please add using below form"
    taskContainer.appendChild(p)
}
const dt= document.querySelector("#date");
const title=document.querySelector('#title')
const desc= document.querySelector("#desc")
const submit= document.querySelector("#submit")
let update= document.querySelector("#update")
submit.addEventListener("click",(event)=>{
    
    event.preventDefault()
    tasks[taskIndex]={"title":title.value,"description":desc.value,"date":dt.value}
    if(tasks.length>0){
    p.textContent=''
    }
    createContainer(tasks[taskIndex])

   taskIndex++
})


function createContainer(task){
    const firstDiv= document.createElement("div");
//creating checkbox and show button
//input
    const div= document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    let checkBoxId=task.title.replace(/\s/g,'')
    input.setAttribute("id",checkBoxId);
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
    let idValue=task.title.replace(/\s/g, '')+ Math.floor(Math.random()*5);
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
    editTask.addEventListener("click",()=>editModal(editId,idValue,checkBoxId))

    const deleteTask= document.querySelector(`#${checkBoxId}`);
    deleteTask.addEventListener("click",()=>deleteTheTask(checkBoxId))
}

function deleteTheTask(id){
    const firstDiv = document.querySelector("#task-container")
    console.log(id);
    
    console.log(tasks);
    const div= document.createElement("div");
    const p= document.createElement("p");
    p.textContent="are you sure you want to delete"
    const yes= document.createElement("button");
    yes.textContent="yes"
    const no= document.createElement("button");
    no.setAttribute("id","no")
    no.textContent="no"
    
    const element = document.querySelector(`#${id}`);
    const value= element.getAttribute("name");
    console.log("checkbox value", value);
    let index= tasks.findIndex(ele=>ele.title===value);
    console.log(index);
    div.appendChild(p)    
    div.appendChild(yes)    
    div.appendChild(no)  
   
        firstDiv.children[index+1].appendChild(div)

    yes.addEventListener("click",(event)=>{
       
    
    
        if(index>=-1&&index<tasks.length){
            tasks.splice(index,1)
        }
        console.log("tasks",tasks);
        taskContainer.removeChild(taskContainer.children[index+1])
    })
   no.addEventListener("click",(event)=>{
div.style.display="none"
console.log(element.value);
element.checked = false;
   })
    
    
    
}

function displayTask(task,editId,idValue,checkBoxId){
    console.log("display tasks",tasks,task);
    const editLabel=document.querySelector(`#${editId}`).previousSibling.previousSibling.lastChild
    const editInput=document.querySelector(`#${editId}`).previousSibling.previousSibling.firstChild
    editInput.setAttribute("id",task.title)
    editInput.setAttribute("name",task.title)

    editLabel.textContent=task.title;
    const showTask=document.querySelector(`#${idValue}`)
    showTask.addEventListener("click",()=>openModal(task.title,task.description,task.date))
    const editTask = document.querySelector(`#${editId}`);
    editTask.addEventListener("click",()=>editModal(editId))
    console.log("checkbox id",checkBoxId);
    
    const deleteTask= document.querySelector(`#${checkBoxId}`);
    deleteTask.addEventListener("click",()=>deleteTheTask(checkBoxId))


}


    

function openModal(titleValue,descValue,dtValue){

modalContent.style.display="block"

    modalTitle.textContent=`Title: ${titleValue}`;;
    modalDesc.textContent=`Description: ${descValue}`;
    modalDue.textContent=`Due: ${dtValue}`


modalClose.addEventListener("click",()=>{
    modalContent.style.display="none"

})
}


function editModal(editid,idValue,checkBoxId){
    console.log("checkbox id",checkBoxId);
    
update.style.display="block"
editTitle=document.querySelector(`#${editid}`).previousSibling.previousSibling.lastChild.textContent

let index= tasks.findIndex(ele=>ele.title==editTitle);
console.log(index,"<--------");

const edititngTask=tasks.filter(ele=>ele.title==editTitle);
title.value=tasks[index].title;
desc.value=tasks[index].description;
dt.value=tasks[index].date

update.replaceWith(update.cloneNode(true)); 
update = document.querySelector("#update");


update.addEventListener("click",handleUpdate)

function handleUpdate(){
   
    let newTask= {"title":title.value,"description":desc.value,"date":dt.value}

console.log("new task ---->",newTask,title,desc,dt);
checkBoxId=title.value;
tasks[index]=newTask
    displayTask(tasks[index],editid,idValue,checkBoxId)
    title.value = '';
    desc.value = '';
    dt.value = '';
    update.style.display = "none";
    modalContent.style.display = "none";

    
}
}

