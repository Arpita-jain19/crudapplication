import React, { useState } from "react";
import './style.css'
 let count=1
// const btnClick=()=>{
// count++;
// console.log("Clicked" +count)
// }
export default function Restaurant()
{
    const [myFullName,setFname]=useState("");
    const [name,setname]=useState('');
    const InputEvent=(event)=>{
        console.log(event.target.value);
        setname(event.target.value);
    }
    const onSubmit=()=>{
        setFname(name);

    }
    
    return(
        
        
      <div>
        <h1>Hello {myFullName}</h1>
        <input type="text" placeholder="Enter your name"
        onChange={InputEvent} value={name}/><br />
        <button onClick={onSubmit}>Submit</button>
      </div>
       
    );
}