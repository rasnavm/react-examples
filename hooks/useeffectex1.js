import React from "react";
class Example extends React.Component
 {
    constructor(props) 
    {
      super(props);
      this.state = {
        count: 0,
        name:''

      };
    }
  
    componentDidMount() {
        console.log('mounted')
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(prevProps,prevState);
        if(prevState.count!=this.state.count)
        console.log('updated')
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              
            Click me
          </button>
        </div>
      );
    }
  }
  export default Example;