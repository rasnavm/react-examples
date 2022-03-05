import React, { useState, useEffect } from 'react';

function F1(props)
 {
     useEffect(()=>{return ()=>{console.log('unmounted')}},[]);
    return ( 
        <div>
          <h1>sub function</h1>  
        </div>
     );
}

export default F1 ;