import React, { useState } from 'react'

import '../App.css'
const RegisterPage = () => {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  async function register(ev)
  {
    
   
      ev.preventDefault();
      
      console.log("Yess..")
      const response=await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-type':'application/json'}
      
    })
    if(response.status===200)
    {
      alert("User registered")
    }
    else{
      alert("User not registered")
    }

  }
  return (
    <div>
       
    <form className='Register'>
    <h1>Register</h1>
    <input type="text" placeholder='Username' value={username} onChange={ev=>{
      setusername(ev.target.value)
    }}/>
    <input type="password" placeholder='password' value={password} onChange={ev=>{
      setpassword(ev.target.value)
    }} />
    <button onClick={register} >Register</button>
   </form>
    </div>
    
  )
}

export default RegisterPage