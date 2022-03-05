import axios from 'axios';
import React from 'react';
import react from 'react';
class FetchApi extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            list:[]

        }
    }
    fetchupdate=()=>
    {
       // fetch('https://jsonplaceholder.typicode.com/todos')
       // .then(response => response.json())
          //  .then((result) => this.setState({list:result}))

          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then((result)=>console.log(result.data))

    }


    render()
    { console.log(this.state.list);
        return(
            <div>
               
                <h1>---fetch Api component----</h1>
                <button onClick={this.fetchupdate}>fetch</button>
                <ul>{this.state.list.map((value,index)=><li key={index}>{value.title}</li>)}</ul>
            </div>
        )
    }
}
export default FetchApi;