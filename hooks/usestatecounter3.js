import React, { useState } from 'react';
function FullName(props) 
{
    const[name,setName]=useState({firstName:' ' , lastName:''});

    return (
        <div>
            <h2>fullname is</h2>
            <form>
            <input type='text' value={name.firstName} onChange={(event)=>setName({...name,firstName:event.target.value})}></input>
            <input type='text'  value={name.lastName} onChange={(event)=>setName({...name,lastName:event.target.value})}></input>
            <h2>fullname is -{name.firstName}{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
      );
}

export default FullName;