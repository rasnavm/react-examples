import React from 'react';

class classcomp extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            name:"ilham"
        }
    }
      handleClick=()=>
     {
         this.setState({name:this.state.name.toUpperCase()});
         alert(this.state.name)
     }
    render()
    {
        return <div>
            <h1>class components created by {this.state.name}</h1>
            <button onClick={this.handleClick}>toUpperCase</button>
            </div>
    }
}
export default classcomp;