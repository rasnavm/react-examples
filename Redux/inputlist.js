import React from "react";
import {connect} from 'react-redux';

import { Add_List } from './Action'
class Inputlist extends React.Component
{
    constructor(props)
    {
        super(props);
        /*this.state=
        {
           name:" ",
           list:[]
        }*/
        this.text='';
    }
   handleChange=(event)=>
    {
        this.text=event.target.value;
        
    }
 /*   handleClick=()=>
    {
        this.setState({list:this.state.list.concat(this.state.name)})
        this.setState({name:''})
    }
    */
    render()
    {
        console.log(this.props);
        return (
            <div>
                <h1>list elements</h1>
                <input type='text'  onChange={this.handleChange}></input>
                <button onClick={()=>this.props.ADD_ITEM(this.text)}>Add</button>
                {this.props.state.list.map((value,index)=>
                <li key={index}>{value}</li>)}
                
            
            </div>
        )
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
    
    ADD_ITEM:(text)=>dispatch(Add_List(text)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Inputlist);

