import React from 'react'
import { useState } from 'react'

import '../App.css'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [redirect, setredirect] = useState(false)
  const Navigate=useNavigate();
  async function login(ev)
  {
    console.log(password)
    ev.preventDefault();
    const response=await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include',
    });
   
   if(response.ok)
   {
    
    setredirect(true);
  }
  else{
   
    alert("Wrong crendentials")
  }

  }
  if(redirect)
  {
   Navigate('/');
  }
  
  
  return (
   <form  className='login' onSubmit={login}>
    <h1>Login</h1>
    <input type="text" placeholder='Username'  value={username} onChange={ev=>setusername(ev.target.value)}/>
    <input type="password" placeholder='password' value={password} onChange={ev=>setpassword(ev.target.value)} />
    <button>Login</button>
   </form>
  )
}

export default Login;