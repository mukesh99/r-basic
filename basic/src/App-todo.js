import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
	render()
	{
		return(
			<div className="container">
				<Header/>
				<Form/>
			</div>
		)
	}
}
const Header =()=>
{
  return(
		<div className="header">To do List</div>
	)
}
const Form =()=>
{
  return(
		<div className="inputarea mt-2">
		<input type="text" placeholder="add your value"/>
		<button type="button" class="btn btn-primary">Primary</button>
		</div>
	)
}

export default App;
