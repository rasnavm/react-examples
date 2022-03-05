
import React, { useEffect, useState } from "react";
function MouseHook()
 {
     const[x,setx]=useState(0);
     const[y,sety]=useState(0);
     useEffect(()=>{
         console.log('useeffect called')
         window.addEventListener('mousemove',logMousePosition)
     },[])
     const logMousePosition=(e)=>
     {
         console.log('mouse event');
         setx(e.clientX);
         sety(e.clientY)
     }
    return (  
        <div>
            Hooks x:{x} y:{y}
        </div>
    );
}

export default MouseHook;