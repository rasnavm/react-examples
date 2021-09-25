import React from "react";
class ClassA extends React.Component
{
    constructor(props)
    {
        super(props);
        this.name="Rasna";
        this.state=
            {count:0,};
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state);
        if(props.num%2==0)
        {
        return {count:state.count+1};
        }

        return null;
    }
    render()
    {
        return <div><h1>class A component count is {this.state.count}</h1></div>
    }
        
    }

export default ClassA; 