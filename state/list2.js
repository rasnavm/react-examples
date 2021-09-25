
import React from "react";
class ListArr extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={list:[

            {name:'rasna',id: '6'},
            { name:'ajay' ,id:'2'},
            {name: 'kallu',id: '4'},
            {name: 'meera',id: '1'}
        ],
    };
        
    }
    handleclick=()=>
    {
        
       let sorted= [].concat(this.state.list);
       sorted.sort((a,b)=>(a.id-b.id))
        this.setState({list:sorted})
    }
    render()
    {
        return(
            <div>
                <h1>list elements</h1>
                <ul>
                    {this.state.list.map((value)=><li>{value.name} {value.id}</li>)}
                </ul>
                <button onClick={this.handleclick}>sort me</button>
            </div>
        );
    }
}
export default ListArr;