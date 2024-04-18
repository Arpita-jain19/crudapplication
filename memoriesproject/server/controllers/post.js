import PostMessage from "../model/postMessage.js";
export const getPost=async(req,res)=>{
   try{
    const postMessage=await PostMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessage);
   }
   catch(err)
   {
    res.status(404).json({message:"rer"})

   }
}
export const createPost=async(req,res)=>{
    const post=req.body;  
    const newpostMessage=new PostMessage(post);  
    try{
await newpostMessage.save;
res.status(201).json(newpostMessage)

    }catch(err){
        res.status(409).json({message:err.message});

    }

}