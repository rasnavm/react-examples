import React from "react";
class Input extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
           name:" ",
           list:[]
        }
        
    }
    handleChange=(event)=>
    {
        this.setState({name:event.target.value})

    }
    handleClick=()=>
    {
        this.setState({list:this.state.list.concat(this.state.name)})
        this.setState({name:''})
    }
    render()
    {
        return (
            <div>
                <h1>list elements</h1>
                <input type='text' value={this.state.name} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>{this.state.list.map((value,index)=>
                <li key={index}>{value}</li>)}
                </ul>
            
            </div>
        )
    }
}
export default Input;
