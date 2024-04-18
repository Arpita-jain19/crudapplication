import CompC from "./compC";
import { firstName ,lastName} from "../App";
import React, {  useContext } from "react";
export default function CompB()
{
    const fName=useContext(firstName);//useContext
    const lName=useContext(lastName);
    return(
      <h1>Hii dear {fName}{lName}</h1>
    );
}