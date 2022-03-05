import React from "react";
//import { ageDown, ageUp } from "./store";
import { ageUp } from './Action';
import { ageDown } from './Action';
import {connect} from 'react-redux';
class AgeCount extends React.Component
{
    
    render(props)
    {
        return(
            <div>
                <h1>{this.props.state.age}</h1>
                <button onClick={this.props.inc_age}>Ageup</button>
                <button onClick={this.props.dec_age}>AgeDown</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>
{
    return{
        state:state,
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        inc_age:()=>dispatch(ageUp()),
        dec_age:()=>dispatch(ageDown())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AgeCount);