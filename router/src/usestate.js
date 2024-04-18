import React from 'react'
import { useState,useEffect } from 'react'
const Usestate = () => {
    const [car, setcar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
    })
    useEffect(() => {
      console.log("Hello jiii, How are you..")
    
    }, [])
    
    const update=()=>{
        setcar(car=>{
            return{...car,brand:"dd"}
        }

        )
    }
  return (

    <div>
       <h1> Hello {car.color}{car.brand}{car.model}{car.year}</h1>
        <h1 onClick={update}>Hello</h1>
    </div>
  )
}

export default Usestate;