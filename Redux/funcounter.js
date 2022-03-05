import React from "react";
import { useDispatch, useSelector } from "react-redux";
 
function Fccounter() 
{
    const Count=useSelector(state=>state.count);
    const dispatch=useDispatch();

    const handleclick=()=>
    {
        dispatch({type:"INC"})
    }
    return ( 
        <div>
            <h1>----increment count using function {Count}-----</h1>
            <button onClick={handleclick}>clickMe</button>
        </div>
     );
}

export default Fccounter;