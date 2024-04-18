import './App.css';
import './components/ClockHeading';

import './components/ClockSlogan';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/Currenttime';
import './components/Currenttime'

import "bootstrap/dist/css/bootstrap.min.css" 
import { useState } from 'react';

function App() {
  const [first, setfirst] = useState(0)
  const [pshow, setpshow] = useState(false)
  let temp="";
  let increment=()=>{
    setfirst(first+1)

  }
  let show=()=>{
    setpshow(!pshow)
  }
  if(pshow)
  {
    temp=<><p>Welcome to pshow</p>
    <button onClick={show}>Hide</button></>

  }
  else{
    temp=<> <button onClick={show}>Show</button></>;
  }
  return (
  
   <>
   <button onClick={increment}>+</button>
   
   <p>{first}</p>
   {temp}
  
   
   </>

  );
}

export default App;
