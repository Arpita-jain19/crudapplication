import React, { useState ,useMemo} from 'react'
import '../App.css'
const Usememo = () => {
    const [counter,setcounter]=useState(1);
    const [name,setname]=useState("")
    const factorial=(n)=>{
        let f=1
        while(n!=1)
        {
            f=f*n;
            n--;
        }
        return f;

    }
    let result=useMemo(()=>{return factorial(counter)},[counter])
  return (
   
    <div>
        <h1>Factorial of {counter} is: <span>{result}</span></h1>
        <button onClick={()=>setcounter(counter-1)}>Decrement</button>
        <button onClick={()=>setcounter(counter+1)}>Increment</button><br/><hr/>
        <label htmlFor="">Enter name</label><br/>
        <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
        <h3>My name is {name}</h3>
    </div>
  )
}

export default Usememo;