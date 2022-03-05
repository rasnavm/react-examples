import React from "react";
import { contextuser,contextvalue } from "../App";
function A()
{
    return(
        <div>
            <h1>---usecontext example2---</h1>
            <contextuser.Consumer>
            {     
                

                user=> 

                <contextvalue.Consumer>
                    {

                    channel=>
                         <div><h2>usercontext value of {user} and context value is {channel}</h2></div>
                    }
                </contextvalue.Consumer>
            }
            </contextuser.Consumer>
        </div>
    )
}
export default A;