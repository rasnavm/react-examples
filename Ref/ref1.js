    
    import React from "react";
    class Ref1 extends React.Component
    {
        constructor(props)
        {
            super(props);
           
            this.ref=React.createRef();

        }
        handlechange=(e)=>
    {
        this.setState({value:e.target.value})
    }  
   
    componentDidMount()
    {
       console.log(this.ref);
    this.ref.current.focus();
    }
    render()
        {
            return(
                <div>
                    <h1>reference component</h1>
                    <input type='text'onChange={this.handlechange} ref={this.ref}></input>
                    
                </div>
            );
        }
    }
    export default Ref1;
    