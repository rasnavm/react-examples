import React from "react";
import {connect} from 'react-redux';
import {INC} from './store';
class Reduxcounter extends React.Component
{
    constructor(props)
    {
        super(props);
       /* this.state={
            count:2,*/
     }
    
  /*  handleclick=()=>
    {
        
        this.setState({count:this.state.count});
        
    }
    */
    
    render()
    {
        console.log(this.props);
        return(
            <div>
                <h2>count is {this.props.state.count}</h2>
          <button onClick={this.props.inc_count}>increment</button>
                
                
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
state:state,
    }

}
const mapDispatchToProps=(dispatch)=>
{
    return{
inc_count:()=>dispatch({type:"INC"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reduxcounter);