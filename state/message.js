
import React from 'react';
class Message extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            message:"welcome"
        }
    } 
    handleClick=()=>
    {
    this.setState({message:'Thank you'});
    }
    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}> subscribe</button>
            </div>
        )
    }
}
export default Message;