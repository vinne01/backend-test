// create server and router using expressjs
require('dotenv').config()
const express =require('express')

const app =express();
const port =3000

app.get('/',(req,res)=>{
    res.send("hello world");
});
app.get('/about',(req,res)=>{
    res.send("i am mern stack developer")
});
app.get('/login',(req,res)=>{
    res.send('<h1>please watch my video</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`app is running now ${port}`)
})

