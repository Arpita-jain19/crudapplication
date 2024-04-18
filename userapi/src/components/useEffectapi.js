import React from 'react';
import { useEffect,useState } from 'react';
const UseEffectapi = () => {
    const [users, setusers] = useState([])
    const getusers=async()=>{
        const  response=await fetch('https://api.github.com/users')
        console.log(response)
        setusers(await response.json());
        

    }
    useEffect(() => {
      getusers();
    
    
    },[])
    
  return (
    <>
      <h2 >List of Github users</h2>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
            {
                users.map((curElement)=>{
                    return(
                      
             <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
           
             
              <div className="image">
                <img className="rounded" width="155"  src={curElement.avatar_url}></img>
              </div>
              <div className="ml-3 w-100">
                <h4 className='mb-0 mt-0 textLeft'>{curElement.login}</h4>
                <span>coder</span>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column">
                    <span>Articles</span>
                    <span className='number1'>38</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Followers</span>
                    <span className='number1'>{curElement.followers_url}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Rating</span>
                    <span className='number2'>8.9</span>
                  
                 
                </div>
              </div>
            </div>
          </div>
                       </div>
                    )

                })
            }
        
         
         
        </div>
      </div>
      
    </>
  )
}

export default UseEffectapi;
