import React from "react";
import { firstName ,lastName} from "../App";
export default function CompC()
{
   //Create context api call...
    return(
        <>
        <firstName.Consumer>
        {(fName)=>{
                return(
                    <lastName.Consumer>
                        {
                            (lName)=>{
                                return <h1>My name is {fName} {lName}</h1>;

                            }
                        }
                    </lastName.Consumer>

                )
                
            
            }}
      </firstName.Consumer>
      </>
    );
}