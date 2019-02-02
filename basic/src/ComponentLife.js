// component Life cycle

class Movie extends Component{

state = {
  name:'Kiran'
}

constructor()
{
  super();
  this.state={
    name:'pompa'
  };
  console.log("constructor");
}
componentWillMount()
{
  console.log("componentWillMount");
}
  render()
  {
    return(
      <h1>{this.state.name}</h1>
    )
  }
}
ReactDOM.render(
 <div><Movie/></div>, document.getElementById('root'));
