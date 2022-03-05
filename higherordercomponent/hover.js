import React from "react";
import Updatecounter from './updatecomponent';

class Hovercounter extends React.Component
{
   /* constructor(props)
    {
        super(props);
        this.state={
            count:0,
        }
    }
    handlecount=()=>
    {
        
        this.setState({count:this.state.count+1});
        
    }*/
    

    
    render()
    {
        console.log(this.props);
        return(
            
            <div>
                <h1>------Mouse Hover component------ </h1>
                <h2 onMouseOver={this.props.handlecount}>hover component count is {this.props.state.count}</h2>
            </div>
        );
    }
}
export default Updatecounter(Hovercounter);