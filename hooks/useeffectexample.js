import React, { useState, useEffect } from 'react';
import F1 from './f1';
function UseEffect1(props)
 {
     const [name,setName]=useState('');
     const [flag,setFlag]=useState(true);
     useEffect(()=>{console.log('mounted')},[]);
     useEffect(()=>{console.log('updated')},[name]);
     const handleclick=()=>
     {
         let uppercase=name.toUpperCase();
         setName(uppercase);

     }
     const handlechange=(e)=>
     {
        setName(e.target.value);
     }
     const unmount=()=>
     {
         setFlag(!flag);
     }

    return (
        
        <div>
            
            <h1>.........UseEffect example .......{name}</h1>
            {flag?<F1></F1>: null}
            <button onClick={unmount}>delete</button>
            <input type='text' onChange={handlechange}></input>
            <button onClick={handleclick}>click me</button>

        </div>
      );
}

export default UseEffect1;