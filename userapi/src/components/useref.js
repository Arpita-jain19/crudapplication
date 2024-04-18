import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
const Useref = () => {
  const [name,setname]=useState();
  const imputEle=useRef();
  const ChangeMe=(e)=>{
    console.log(e.target.value)
    setname(e.target.value)
    

  }
   return(
    <div>
      <label htmlFor="">Enter your name </label><br/>
      <input ref={imputEle}type="text" name='name' placeholder='Enter your name' value={name} onChange={ChangeMe}/>
     
      <button onClick={()=>{setname("");imputEle.current.focus();}}>Reset</button>
      <h1>My name is {name}</h1>
      
    </div>
   );
}

export default Useref