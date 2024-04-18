import React from 'react'
import '../App.css'
import { useState } from 'react';
const Menu = () => {
    let [menustatus, setmenustatus] = useState(false)
  return (
   
   <>
   <button className='micon' onClick={()=>{setmenustatus(!menustatus)}}>{menustatus?<span>&times;</span>:<span>&#9776;</span>}</button>
   <div className={`menu ${menustatus?'activemenu':''}`}>
   <ul >
    <li>Home</li>
    <li>About</li>
    <li>Course</li>
    <li>Gallery</li>
    <li>Contact Us</li>
   </ul></div>
   
   </>
  )
}

export default Menu