import React from "react";
import react from "react";
class ToDo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            list:[],
            name:" "
        }
      //  this.txt='';
    }
    handlechange=(event)=>
    {
            //this.txt=event.target.value;
            this.setState({name:event.target.value})
            
    }
    handleclick=()=>
        {
            this.setState({list:this.state.list.concat(this.state.name)});
            this.setState({name:''})
            
    }
    deleteclick=(index)=>
    {
        let updated=[...this.state.list];
        console.log( updated);
       
        console.log(updated.splice(index,1));
        this.setState({list: updated})
        
        
    }
    render()
    {
        return (
            <div>
                <h1>input field</h1>
                <input type="text" value={this.state.name}  onChange={this.handlechange} ></input>
                <button onClick={this.handleclick}>Enter</button>
                <ul>{this.state.list.map((value,index)=>
                <div>
                <li key={index}>{value}</li>
               <button onClick={()=>this.deleteclick(index)}>Delete</button>
               </div>)}
               
                </ul>
            </div>
        )
    }
}
export default ToDo;