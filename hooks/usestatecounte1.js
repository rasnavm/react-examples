import React, { useState } from 'react';
function HookCounter(props) 
{
    const [count,setCount]=useState(0);
    return(
            <div>
                <h2>usestate component counter {count}</h2>
                <button onClick={()=>setCount(count+1)}>count {count}</button>
            </div>

     );
}

export default HookCounter;