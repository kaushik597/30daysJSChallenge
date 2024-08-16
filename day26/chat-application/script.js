const socket = new WebSocket('ws://localhost:8080');
// socket.binaryType = 'blob';
const output = document.querySelector("#output");
const userNameInput = document.querySelector("#username");
const messageInput = document.querySelector('#message');
const sendBtn = document.querySelector("#send");


socket.addEventListener('open', (event)=>{
    console.log("connected to websocket server");
    
})

socket.addEventListener('message',(event)=>{
    console.log((event));
    
    if (event.data instanceof Blob) {
        // Handle Blob
        const reader = new FileReader();
        reader.onload = function() {
            const message = reader.result;
            console.log("Received message:", message);

            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            output.appendChild(messageElement);
            output.scrollTop = output.scrollHeight;
        };
        reader.readAsText(event.data);
    } else if (event.data instanceof ArrayBuffer) {
        // Handle ArrayBuffer
        const decoder = new TextDecoder('utf-8');
        const message = decoder.decode(event.data);
        console.log("Received message:", message);

        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        output.appendChild(messageElement);
        output.scrollTop = output.scrollHeight;
    } else {
        // console.error("Unknown data type received:", event.data);
        const message = event.data;

        const [sender, ...messageParts] = message.split(':');
        const messageText = messageParts.join(':').trim();
        const isOwnMessage = sender ===userNameInput.value.trim()
        const displaySender = isOwnMessage ? 'You' : sender;
        displayMessage(displaySender, messageText);

    }
   
})

function displayMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.className = `message ${sender === 'You' ? 'own' : 'other'}`;
    output.appendChild(messageElement);
    output.scrollTop = output.scrollHeight; // Scroll to the bottom of the chat
}

socket.addEventListener('close',(event)=>{
    console.log('disconnected from websocket server');
    
})

sendBtn.addEventListener('click',()=>{
    const username= userNameInput.value.trim();
    const messge=messageInput.value.trim();
    console.log('user: '+ username+ 'msg: '+messge);
    if(!username){
        alert('please enter username');
        return
    }
    
    if(username && messge){
        const fullMessage=`${username}:${messge}`;

        console.log(typeof(fullMessage));
        
        socket.send(fullMessage);
        displayMessage('You', messge);
        messageInput.value='';

    }
})

messageInput.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        sendBtn.click();
    }
})