import React from "react";
class Check extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            list:[],
            name:"",
            key:'',
            tobedelete:[],

        }
    }
    handlchange = (event) => 
    {
        
        this.setState({ name: event.target.value})
      }
     handleclick=(k)=>
     {
         if(k==='')
         {
         this.setState({list:this.state.list.concat(this.state.name)})
         
         }
         else
         {
                console.log("else");
                var a = this.state.list;
                a[k] = this.state.name;
                this.setState({list:a});
        }
            this.setState({name:"",key:'',checked:''})
     }

     
 deleteclick=()=>
    {
        let a=[...this.state.tobedelete];
        
        console.log(a);
        let main=[...this.state.list];
            for(let i=0;i<a.length;i++)
            {
            let del=a[i];
            console.log(main.splice(del,1));
            }
        this.setState({list:main,tobedelete:''});
     }
        
        updateclick=()=>

        {
            let a=[this.state.tobedelete];
            alert(a);
            let main=[...this.state.list];
            for(let i=0;i<a.length;i++)
            {
                let updt=a[i];
                
                let upd=this.state.list[updt];
                console.log(upd);
                this.setState({name:upd,key:updt});

            }
            

        }
          
    
    
    handlecheckchange=(indx)=>
    {
        let a=[...this.state.tobedelete];
        let indexfound=false;
        for(let i=0;i<a.length;i++)
        {
            if(a[i]===indx)
            {
                indexfound=true;
                a=a.splice(a[i],1);
                break;
            }
        }
        console.log(indexfound)
        if(indexfound)
        {
            this.setState({tobedelete:a})
        }
        else{
        console.log(indx);
        a=a.concat(indx)
        this.setState({tobedelete:a})
        }
        console.log(a);
        
    }

    render()
    {
        return(
        
            <div>
                <h1>checkbx component</h1>
                <input type="text"  value={this.state.name} onChange={this.handlchange} ></input>
                <button onClick={this.handleclick.bind(this,this.state.key)}>Enter</button><br/><br/><br/>
              
                <div>
               
                    
                    <span>{this.state.list.map((value,index)=>
                     <span key={index}>
                     <input type="checkbox"  onChange={this.handlecheckchange.bind(this,index)}></input>{value}<br/>
                     </span>)}
                     </span>
                     
                     <button onClick={()=>this.deleteclick(this.state.key)}>Delete</button>
                     <button onClick={()=>this.updateclick(this.state.key)}>update</button>
                </div>
                
                
                </div>

        )
    }
}
export default Check;