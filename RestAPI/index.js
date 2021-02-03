const { request } = require("express");
const express = require("express");
const app=express();
app.use(express.json());
const port=3000;
const allMessages=[];

app.get('/messages',(req,res) => {
    res.send(allMessages);
})

// Adding a message
app.post('/messages',(req,res) => {
    const data={
        id:allMessages.length+1,
        sender:req.body.sender,
        msg:req.body.msg,
        recepient:req.body.recepient
    }
    allMessages.push(data)
    res.send(data)
})

// get a particular message by id
app.get('/messages/:id',(req,res) => {
    const message=allMessages.find(m => m.id==req.params.id);
    if(!message)res.status(404).send('not found');
    res.send(message);
})

// Edit the message
app.put('/messages/:id',(req,res) => {
    const message=allMessages.find(m => m.id==req.params.id);
    if(!message)res.status(404).send('not found');
    message.msg=req.body.msg;
    res.send(message);
})

// delete the message
app.delete('/messages/:id',(req,res) => {
    const message=allMessages.find(m => m.id==req.params.id);
    if(!message)res.status(404).send('not found');
    const index=allMessages.indexOf(message);
    allMessages.splice(index,1)
    res.send(message);
})

app.listen(port,() => {
    console.log(`listening on port http://localhost:${port}`);
})


