import React from "react";
import {connect} from 'react-redux';
import { Upper_case } from './Action';
class Uppercase1 extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <h1>Redux change to Uppercase {this.props.state.name}</h1>
                <button onClick={this.props.CHANGE_CASE}>change</button>
                    </div>
        )
    }
}
const mapStateToProps=(state)=>
{
    return{state:state,}
}
const mapDispatchToProps=(dispatch)=>
{
     return{ CHANGE_CASE:()=>dispatch(Upper_case()),}
}


export default connect(mapStateToProps,mapDispatchToProps)(Uppercase1);
