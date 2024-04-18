import React,{useState} from 'react';

import './index.css';
const App = () => {
  const [name,setName]=useState("Arpita");
  const [flag,setFlag]=useState(false);
  const [steps,setsteps]=useState(0);
  const[names,setnames]=useState([]);
  function addNames(e)
  {
   e.preventDefault();
   setnames([...names,{id:names.length,name:name}]);
   setName("");
   console.log(setnames)

  }
  function changeName()
  {
    setFlag(!flag)
  }
  function increment()
  {
      setsteps(steps+1)
  }
  function decrement()
  {
    setsteps(steps-1)
  }
  return (
    <>
   <h1>Hello,{flag?name:""}</h1>
   <button onClick={changeName}>Click me</button>
   <hr></hr>
   <div className='diva'>
   <button onClick={increment}> + </button>
   <p>{steps}</p>
   <button onClick={decrement}>-</button>
   </div>
   <hr></hr>
   <form onSubmit={addNames}>
    <input type="text" value={name} placeholder='addnames' onChange={(e)=>setName(e.target.value)} />
    <button>Submit</button>
   </form>
   <hr />
   <ul>
    {names.map((item)=>(
      <li key={item.id}>{item.name}</li>
    ))

    }
   </ul>
   
    </>
    
    );

 }
  


export default App;