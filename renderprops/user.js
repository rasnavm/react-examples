import React from "react";
class User extends React.Component
 {
    constructor(props)
    {
        super(props);
       
    }

    
    render()
     { 
        return ( 
            <div>
                <h1>{this.props.name(false)}</h1></div>
         );
    }
}
 
export default User ;