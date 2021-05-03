import axios from 'axios';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../App.css'

  const Todo = (props) => {
    return ( 
    <tr>
       <td className={props.todo.complited ==0 ? 'complited':''} >{props.todo.description}</td>
       <td className={props.todo.complited ==0 ? 'complited':''} >{props.todo.responsible}</td>
       <td className={ props.todo.complited == 0 ? 'complited':''} >{props.todo.priority}</td>
       <td>
           <Link to={"/edit/"+props.todo.id}>Edit</Link>
       </td>
    </tr> );
}



class TodoList extends Component {
    
    
    
    constructor(props) {
        super(props);
        this.state = {  
            todos:[],
            data: true,

        }
        axios.get("http://192.168.1.4/api/todos").then(res => {this.setState({todos :res.data})});
    }

    todoList= () => this.state.todos.map(todo =>(<Todo todo={todo} key={todo.id} />) );
  

    /*
         componentDidUpdate(){
        
        if(this.isMounted){
            axios.get("http://192.168.1.5/api/todos").then(res => {this.setState({todos :res.data})});
        }
        
      //axios.get("http://192.168.1.5/api/todos").then(res => console.log(res));
    }
   
    */
    render() { 
        return ( 
        <div>
            <h3>Todos List</h3>
            <table className='table table-striped' style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.todoList()}
                </tbody>
            </table>
        </div> );
    }
}
 
export default TodoList;