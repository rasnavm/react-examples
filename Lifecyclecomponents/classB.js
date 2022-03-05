import React from "react";
import ClassA from './classA';
class ClassB extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {num:0,
        flag:true,
        };

    }
    handleClick=()=>
    {
        this.setState({num:this.state.num+1})
    }
    handleunmount=()=>
    {
        console.log('-----unmount  class A------');
        this.setState({flag:false})
    }
    render()

    {
        console.log('---class B rendering----')
        return <div><h1>classB is {this.state.num}</h1>
        <button onClick={this.handleClick}>inc num</button>
       {this.state.flag?<ClassA num={this.state.num}> </ClassA> :null}
       <button onClick={this.handleunmount}>unmount</button>
        </div>
    }
    componentDidUpdate=()=>
    {
        console.log('---Did update B----');
    }
}
export default ClassB;