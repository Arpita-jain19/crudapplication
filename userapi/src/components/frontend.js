import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Frontend = () => {
    const [message,setmessage]=useState('');
    useEffect(() => {
        axios.get('api/message').then(res=>setmessage(res.data))
        .catch(err=>console.log(err))
        
      
    }, []);
    
  return (
    <div>MERN STACK PROJECT...
        <p>{message}</p>
    </div>
  )
}

export default Frontend;