import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
         }
    }
    handlecount=()=>
{
    this.setState(prevState=>{return {count:prevState.count+1}});
}
    render() { 
        return ( 
            <div>
                {this.props.counting(this.state.count,this.handlecount)}
            </div>
         );
    }
}
 
export default Counter;