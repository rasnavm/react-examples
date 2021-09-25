import React from "react";
import ClassA from './classA';
class ClassB extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {num:0};

    }
    handleClick=()=>
    {
        this.setState({num:this.state.num+1})
    }
    render()

    {
        return <div><h1>classB is {this.state.num}</h1>
        <button onClick={this.handleClick}>inc num</button>
        <ClassA num={this.state.num}></ClassA>
        </div>
    }
}
export default ClassB;