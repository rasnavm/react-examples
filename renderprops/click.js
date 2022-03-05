import React from "react";
class   Click extends React.Component 
{
  /* constructor(props)
    {
        super(props);
        this.state=
        {
            count:0,
        }
    }

    handlecount=()=>
    {
        this.setState(prevState=>{return {count:prevState.count+1}});
    }
*/
    render() { 
        const {count,handlecount}=this.props;
        return <div>
            
            <h1>click by increment {count}</h1>
            <button onClick={handlecount}>increment{count}</button>
        </div>;
    }
}
 
export default Click;