import React from "react";
class   Hover extends React.Component {
   /* constructor(props) 
    {
        super(props);
        this.state = { 
            count:0,
         }
    }
    handlecount=()=>
{
    this.setState(prevState=>{return {count:prevState.count+1}});
}*/
    render() {
        const {count,handlecount}=this.props; 
        return ( 
            <div>
                <h1>hover component {count}</h1>
                <button onMouseOver={handlecount}>incerment by {count}</button>
            </div>
         );
    }
}
 
export default Hover;