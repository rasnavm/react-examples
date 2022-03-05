import React from "react";
import {useState,useContext} from 'react';
import { contextuser ,contextvalue} from "../App";
import A from './usecontext2';
import C from './usecontext3';
function Usecntxt()
{
    const[count,setcount]=useState(0);
    const User= useContext(contextuser);
    const Value=useContext(contextvalue);
    
    const handleclick=()=>
    {
        setcount(count+1);
    }
    return(
        <div>
            <h1>---usecontext {count}</h1>
            <h2>{User} {Value}</h2>
                        <A></A>
                        <C></C>
                        
            <contextuser/>
            <button onClick={handleclick}>clickme</button>
        </div>
    )
}
export default Usecntxt;