import React, { useState } from 'react';
function HookCounter2(props)
 {
     let initialcount=0;
     const [count,setCount]=useState(initialcount);
    const increment5=()=>
     {
         setCount(count+5);
     }
       return(
        <div>
                
            <h2>usestate with counter {count} </h2>
            <button onClick={()=>setCount(initialcount)}>reset </button>
            <button onClick={()=>setCount(count+1)}> increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            <button onClick={increment5}>increment 5</button>
        </div>

      );
}

export default HookCounter2;