import React from "react";
class ClassA extends React.Component
{
    constructor(props)
    {
        super(props);
        this.name="Rasna";
        this.state=
            {count:0,
            value:2,
        };
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('=====staticderived props-----');
        console.log(props,state);
        if(props.num%2==0)
        {
        return {count:state.count+1};
        }
        console.log(state.count);
        return null;
    }
    shouldComponentUpdate(props,state)
    {
            console.log('-----shouldcomponentupdate-----')
            if(props.num==state.value)
            {
            return false;
            }
            return true;
    }
    
    componentDidMount=()=>
    {
        console.log('---mounted class A----');
    }
    render()
    {
        console.log('----class A rendering----');
        return <div><h1>class A component count is {this.state.count}</h1></div>
    }
    componentDidUpdate=()=>
    {
        console.log('--Did update Class A')
    }
        
    }

export default ClassA; 