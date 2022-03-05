import React, { useEffect, useState } from "react";
function  Example1()
 {
     const [count,setcount]=useState(0);
     const [name,setname]=useState('');
     useEffect(()=>{
         console.log('updating')
         document.title=`you clicked ${count}times`
        },[count,name]);
    return ( 
        <div>
            <h1>useeffect example{count}</h1>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)}></input>
            <button onClick={()=>{setcount(count+1)}}>increment</button>
        </div>
     );
}

export default Example1 ;