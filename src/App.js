import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import TodosList from './component/todo_list'
import CreateTodo from './component/CreateTodo';
import EditTodo from './component/EditTodo';
import icon from './images/icon.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() { 
    return (
<React.Fragment>

<Router>
<div className="container">

  <nav className="navbar navbar-expand-lg navbar-light bg-light">    
    <a className='navbar-brand' href='https://reactjs.org/docs/getting-started.html' target='blank'>
      <img src={icon} width='40' height='40' alt='error icon'/>
    </a>
    <Link className='navbar-brand' to='/' >MERN-APP</Link>  
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link className="nav-link" to="/">Todos</Link>
        </li>
        <li className="navbar-item">
        <Link className="nav-link" to="/create">Create Todo</Link>
        </li>
      </ul>
    </div>
  </nav>
       
  <Switch>
  <Route path='/' exact component={TodosList}/>
  <Route path='/todos' exact component={TodosList}/>
  <Route path='/edit/:id' exact component={EditTodo}/>
  <Route path='/create' exact component={CreateTodo}/>
  </Switch>
      
</div>
</Router>
</React.Fragment> );
  }
}
 
export default App;


