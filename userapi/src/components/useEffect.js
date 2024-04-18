import React from 'react'
import { useState,useEffect } from 'react'
const Component=()=>{
    
    
    const [date, setDate] = useState(null);
    const[message,setmessage]=useState("Funcational Component")
    const showDate = () => {
      const currentDate = new Date();
      setDate(currentDate);
    };
  
    return (
      <div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button>{onclick=()=>{setmessage("Changed Funcationcal component")}}change message</button>
        <h1>{date && date.toString()}</h1>
      </div>
    );
}
const UseEffect = () => {
   
    const [flag,setflag]=useState(true)
    useEffect(() => {
        console.log("Component mount")
      
       
      },[flag])
    
  return (
    <div>
      <h1>Hello</h1>
        
       {flag?<Component/>:""}
              <button onClick={()=>{setflag(!flag)}}>Toggle classs composnent</button>

    </div>
    
  )
}


export default UseEffect