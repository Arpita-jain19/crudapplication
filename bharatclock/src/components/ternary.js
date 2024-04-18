import React from 'react'
import { useState } from 'react'
import btnModule from '../Button.module.css'
const Ternary = () => {
    const [status, setstatus] = useState(false)
    const [pstatus, setpstatus] = useState(false)
    const show=()=>{
        setstatus(!status)
    }
  return (
    <>
    {/* <button className={btnModule.error }>Error</button>
    <button className={btnModule.warning}>Warning</button>
    {status? <p>Welcome to ws</p>:""}
   <button onClick={show}>{status?'Hide':'show'}</button> */}
   <input type={pstatus?'text':'password'} />
   <button onClick={()=>{
    setpstatus(!pstatus)
   }}>{pstatus?'Hide':'show'}</button>
    </>
  )
}

export default Ternary;