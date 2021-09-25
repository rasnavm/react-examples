import React from "react";
class Class1 extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <div><h1>class1 created by {this.props.username} </h1></div>
    }
}
export default Class1;
