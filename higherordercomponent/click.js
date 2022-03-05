import React from "react";
import Updatecounter from "./updatecomponent";
class Clickcounter extends React.Component
{
    
/*constructor(props)
    {
        super(props);
        this.state={
            count:0,
        }
    }
    handlecount=()=>
    {
        
        this.setState({count:this.state.count+1});
        
    }
    */

    
    render()
    {
        console.log(this.props);
        return(
            <div>
                <h1>------Mouse Click component------ </h1>
                <h2> click component is {this.props.state.count}</h2>
                <button onClick={this.props.handlecount}>increment</button>
            </div>
        );
    }
}
export default Updatecounter(Clickcounter);