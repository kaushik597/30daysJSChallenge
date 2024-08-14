const  WebSocket = require("ws");
const server = new WebSocket.Server({port:8080})

server.on('connection',(ws)=>{
    console.log('new clients connected');   
    ws.on('message',(message)=>{
        console.log(`received message: ${message}  ${typeof(message)}`);
        
        server.clients.forEach((client)=>{
            if(client!==ws && client.readyState===WebSocket.OPEN){                
                client.send(message.toString())
            }
        })
    })

    ws.on('close',()=>{
        console.log("client disconnected");
        
    })

    
})

console.log('websocket server is running on localhost:8080');
