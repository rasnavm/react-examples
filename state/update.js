import React from "react";
import react from "react";
class ToUpdate extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            list:[],
            name:" ",
            key:""
        }
      //  this.txt='';
    }
    handlechange=(event)=>
    {
            //this.txt=event.target.value;
            this.setState({name:event.target.value})
            
    }
    handleclick=(k)=>
       
        {
            
            if (k == ""){
                    this.setState({list:this.state.list.concat(this.state.name)});
            }else{
                var a = this.state.list;
                a[k] = this.state.name;
                this.setState({list:a});
            }
            this.setState({name:'',key:""})
            
    }
    updateclick=(index)=>
    { let update=this.state.list[index];
        console.log(update);
        this.setState({name:update,key:index})
        
    }
    render()
    {
        return (
            <div>
                <h1>input field</h1>
                <input type="text" value={this.state.name}  onChange={this.handlechange} ></input>
                <button onClick={this.handleclick.bind(this,this.state.key)}>Enter</button>
                <ul>{this.state.list.map((value,index)=>
                <div>
                <li key={index}>{value}</li>
               <button onClick={()=>this.updateclick(index)}>update</button>
               </div>)}
               
                </ul>
            </div>
        )
    }
}
export default ToUpdate;