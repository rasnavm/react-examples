import React from "react";
import {useContext} from 'react';
import { contextuser } from "../App";
function C()
{
    const Name=useContext(contextuser);
    return(
        <div>
            <h1>----usecontext exmple 3</h1>
            <h3>{Name}</h3>
        </div>
    )
}
export default C;