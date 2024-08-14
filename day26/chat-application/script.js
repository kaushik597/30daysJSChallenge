const socket = new WebSocket('ws://localhost:8080');
const output = document.querySelector("#output");
const userNameInput = document.querySelector("#username");
const messageInput = document.querySelector('#message');
const sendBtn = document.querySelector("#send");


socket.addEventListener('open', (event)=>{
    console.log("connected to websocket error");
    
})

socket.addEventListener('message',(event)=>{
    const message = event.data;
    const messageElement = document.createElement('p');
    messageElement.textContent=message;
    output.appendChild(messageElement);
    output.scrollTop= output.scrollHeight
})

socket.addEventListener('close',(event)=>{
    console.log('disconnected from websocket server');
    
})

sendBtn.addEventListener('click',(event)=>{
    const username= userNameInput.value.trim();
    const messge=messageInput.value.trim();
    console.log('user: '+ username+ 'msg: '+messge);
    
    
    if(username && messge){
        const fullMessage=`${username}:${messge}`;

        console.log(fullMessage);
        
        socket.send(fullMessage);
        messageInput.value='';

    }
})

messageInput.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        sendBtn.click();
    }
})