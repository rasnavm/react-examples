import React from "react";
class Count extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0,}
    }
    handleClick=()=>
    {
       
        this.setState({count:this.state.count+1},()=>{console.log('callback value',this.state.count)});
       
    }
    render()
    {
        return(
        <div>
            <h2>increment: {this.state.count}</h2>
            <button onClick={this.handleClick}>increment</button>
                  </div>
                  );

    }
}
export default Count;