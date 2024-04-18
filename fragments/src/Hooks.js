import { useEffect, useState } from "react";


export default function Hook()
{
    const [email,setemail]=useState("");
    const [age,setAge]=useState(13);
    useEffect(()=>{
console.log(age)
    },[]);
    function register(event)
    {
        event.preventDefault();
    console.log(email);

    }
    function increase(event)
    {
        event.preventDefault();
        setAge(age+1)
    }
   
   
    return(
        <>
        <h1>{age}</h1>
        <button onclick={increase}>{age}</button>
        <form>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
            <input type="password"  placeholder="Enter your password"/><br/>
            <button onClick={register}>Submit</button>
        </form>
        </>
    );

}