import React from "react";
class List extends React.Component
{
    constructor(props)
    {
        super(props);
        this.list=["rasna","kalyani","srini"]    
    }
    render()
    {
        return(
        <div>
        <h1>list Rendering</h1>
        <ul>
            {this.list.map((value) => <li>{value}</li>)}
            
        </ul>
        </div>
        )
    }
}
export default List;