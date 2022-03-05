import React from "react";

const Updatecounter=(Actualcomponent)=>
{
    return class Newcomponent extends React.Component
    {
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        };
    }
    handlecount=()=>
    {
        
        this.setState({count:this.state.count+1});
        
    };

    render()
    {
        return(
            <div>
                 <Actualcomponent
                    state={this.state}
                    handlecount={this.handlecount}>
                </Actualcomponent>
                
            </div>
        )
    }
}

}
export default Updatecounter;
    