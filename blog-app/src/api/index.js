const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const user=require('./models/user')
const app=express();
const cookieParse=require('cookie-parser');
const jwt=require('jsonwebtoken');
const secretkey='asjdjshdjhadjdh';
app.use(express.json());
app.use(cookieParse);
app.use(cors({
    credentials:true,origin:'http://localhost:3000'
}));
 mongoose.connect('mongodb+srv://jainarpita56:Arpita19@cluster0.tff76rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.post('/register',async(req,res)=>{
   const{username,password}=req.body
   try{
   const userDoc=await user.create({username,password})
   res.json(userDoc);
   
   }catch(err)
   {
    res.status(400).json(err);
    
   }
})
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const userDoc=await user.findOne({username});
    
   
   if(password===userDoc.password)
   {
    console.log("Gonee")
    jwt.sign({username,id:userDoc._id},secretkey,{},(err,token)=>{
        if(err)
        throw err;
    res.cookie('token',token).json('ok');

    })
   }
   else{
    res.status(400).json("wrong credentials");
    console.log("invalid")
   }

})
app.get('/profile',(req,res)=>{
    res.json(req.cookies);
})
app.listen(4000);
