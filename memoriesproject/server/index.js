import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import routers from './routes/post.js';
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',routers)
const URL='mongodb+srv://jainarpita56:Arpita19@cluster0.s9cadtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const port=4000;
mongoose.connect(URL).then(()=>app.listen(port,()=>console.log(`Server running on port..${port}`))).catch((
    (error)=>console.log(error.message)));
   

