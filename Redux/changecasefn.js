import React from "react";
import { useDispatch, useSelector } from "react-redux";
function  Changeupper() 
{
    const name=useSelector(state=>state.name);
    const dispatch=useDispatch();
   const  handleclick=()=>
    {
        dispatch({type:"UPPER"});
    }
    return ( 
        <div>
            <h1>{name}</h1>
            <button onClick={handleclick}>Click me</button>
        </div>
     );
}

export default Changeupper ;