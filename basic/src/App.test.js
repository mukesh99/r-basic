import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		  super(props)

		  this.state={
			  counter:0

			  }
	  }
	  increment()
	  {
		  this.setState({
			  counter:this.state.counter + 1
		  });
	  }
	  decrement()
	  {
		  this.setState({
			  counter:this.state.counter - 1
		  });
	  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<div>{this.state.counter}</div>
        <button onClick={this.increment.bind(this)}>Increment</button>
		<button onClick={this.decrement.bind(this)}>decrement</button>
      </div>
    );
  }
}

export default App;
