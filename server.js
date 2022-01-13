const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});
app.get('/test',(req,res)=>{
    res.send("this works fine!!!")
})
io.on("connection", (socket) => {
    // console.log("what is socket ", socket);
    console.log("socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log(payload);
        io.emit("chat", payload);
    })
})

server.listen(5000, () => console.log("connected"))
