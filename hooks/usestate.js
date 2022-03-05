
import React, { useState } from 'react';

     function Usestateexample(props) 
     {
         const [name,setName]=useState('');
         const handlechange=(event)=>
         {
                setName(event.target.value);
         }
        const handleclick=()=>
         {
             let updatename=name.toUpperCase();
             setName(updatename);
         }

         return(
             <div>
             <h1>functional component usestate {name}</h1>
             <input type='text' onChange={handlechange}></input>
             <button onClick={handleclick}>touppsercase</button>
             </div>
         )
     }
     export default Usestateexample;