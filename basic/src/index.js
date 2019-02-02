import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import registerServiceWorker from './registerServiceWorker';

// class App extends Component{ //children
// 	render()
// 	{
// 		return(
// 			<div className="container">
//       {this.props.children}
// 			</div>
// 		)
// 	}
// }
//
// ReactDOM.render(
//   <div>
//
//   <App>Mukesh</App>
//   <App>Mukesh1</App>
//   <App>Mukesh2</App>
//
//
//   </div>
//   , document.getElementById('root'));

// class App extends Component{ //state define
//   constructor(props) {
//   super(props)
//   this.state = {
//     name:"Mukesh",
//     age:32,
//     salary:45000
//   }
//   this.state1 = {
//     name:"Mukesh",
//     age:32,
//     salary:45000
//   }
// }
// 	render()
// 	{
// 		return(
// 			<div className="container">
// 				<ul>
//           <li>{this.state.name}</li>
//           <li>{this.state.age}</li>
//           <li>{this.state.salary}</li>
//           <li>{this.state1.salary}</li>
//         </ul>
// 			</div>
// 		)
// 	}
// }
//
// ReactDOM.render(
//   <div><App/></div>, document.getElementById('root'));


// class App extends Component{ //change state
//   constructor(props) {
//   super(props)
//   this.state = {
//     name:"Mukesh",
//     age:32,
//     salary:45000
//
//   }
// }
//   changestate = () =>{
//     this.setState({
//       name: 'Pintu',
//       age:20
//     });
//   }
// 	render()
// 	{
// 		return(
// 			<div className="container">
// 				<ul>
//           <li>{this.state.name}</li>
//           <li>{this.state.age}</li>
//           <li>{this.state.salary}</li>
//         </ul>
//         <button onClick={this.changestate}>Change state </button>
// 			</div>
// 		)
// 	}
// }
//
// ReactDOM.render(
//   <div><App/></div>, document.getElementById('root'));

// nesting component we have idea
// function Welcome(props) { // functional component
//   return (
//     <h1>Hello, {props.name}</h1>
//   );
// }
//
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// const Temp =(props)=>
// {
//   return(
//     <div>{props.val}</div>
//   );
// }
//
// class Movie extends Component{
// state ={
//   val : 1
// }
//   render()
//   {
//     return(
//     <h1>
//       <Temp val={this.state.val}/>
//       </h1>
//     )
//   }
// }
// ReactDOM.render(
//  <div><Movie/></div>, document.getElementById('root'));


class App extends React.Component {

state = { count: 0 }

handleIncrement = () => {
  this.setState({ count: this.state.count + 1 })
}

handleDecrement = () => {
  this.setState({ count: this.state.count - 1 })
}
  render() {
    return (
      <div>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.handleIncrement}>Increment by 1</button>
        <button onClick={this.handleDecrement}>Decrement by 1</button>
      </div>
    )
  }
}
ReactDOM.render(
<div><App /></div>, document.getElementById('root'));
