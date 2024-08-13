// const WebSocket = require('ws');
// const http= require('http');

const WebSocket= require('ws');
const http= require('http');




//create a http server


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("websocket is running")
})
// create a web socket server by passing http server
const wss= new WebSocket.Server({server})

//event handler for websocket connections
wss.on('connection',(ws)=>{
    console.log('A new client has connected');
    ws.on('message',(message)=>{
        console.log('Received ', message);
        wss.clients.forEach((client)=>{
            if(client!==ws && client.readyState===WebSocket.OPEN){
                client.send(message)
            }
        })
        
    })
    
})

wss.on('close',()=>{
    console.log(`A client has disconnected`);
    
})

const PORT= process.env.PORT||3000
server.listen(PORT,()=>{
    console.log(`websocket server is listening on port `, PORT);
    
})


