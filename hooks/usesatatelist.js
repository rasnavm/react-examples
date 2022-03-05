import React, { useState } from 'react';
function AddList(props) 
{
    const [nums ,setNums]=useState([]);
    const handleclick=()=>
    {
        setNums([...nums,{
            id:nums.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <h2>array with usestate</h2>
        <button onClick={handleclick}>Add</button>
        <ul>
            {nums.map(num=><li key={num.id}>{num.value}</li>)}
        </ul>
        </div>
      );
}

export default AddList;