import React from "react";
class Lower extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            text:" ",
        }
    }
    handlechange=(event)=>
    {
        this.setState({text:event.target.value});
    }
    handleclick=()=>
    {
        this.setState({text:this.state.text.toLowerCase()});

    
    }
    render()
    {
        return(
            <div>
                <h1>to lower is:{this.state.text}</h1>
                <input type='text' onChange={this.handlechange}></input>
                <button onClick={this.handleclick}>clickme</button>
            </div>
        )
    }
        
    
}
export default Lower;