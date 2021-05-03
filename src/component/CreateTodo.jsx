import axios from 'axios';
import React, { Component } from 'react';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
         }
    }
    onChangeTodoDescription=(e)=>{
        this.setState({
            todo_description:e.target.value,
        });
    }
    onChangeTodoResponsible=(e)=>{
        this.setState({
            todo_responsible:e.target.value
        });
    }
    onChangeTodoPriority=(e)=>{
        this.setState({
            todo_priority:e.target.value
        });
    }
    onSubmitform=(e)=>{
        e.preventDefault();
        let newtodo ={
            todo_description:this.state.todo_description,
            todo_responsible:this.state.todo_responsible,
            todo_priority :this.state.todo_priority,
            todo_completed : 0,
        };
        axios.post('http://192.168.1.5/api/create/todo',newtodo);
        
    }

    render() { 
        return (
<div style={{marginTop:'20px'}}>
   
   <h3>Create New Todo</h3>
   <form onSubmit={this.onSubmitform}>
      <div className='form-group'>
       <label>Description :</label>
       <input type='text' 
              className='form-control'
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription} />
    </div>   
      <div className='form-group'>
       <label>Responsible :</label>
       <input type='text' 
              className='form-control'
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible} />
    </div>         
      <div className='form-group'>
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio" 
                   name="priorityOptions" 
                   id="priorityLow"
                   value="Low"
                   checked={this.state.todo_priority==='Low'} 
                   onChange={this.onChangeTodoPriority}/>
            <label className="form-check-label" >Low </label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio" 
                   name="priorityOptions" 
                   id="priorityMedium"
                   value="Medium"
                   checked={this.state.todo_priority==='Medium'} 
                   onChange={this.onChangeTodoPriority}/>
            <label className="form-check-label" >Medium </label>
        </div>
        <div className="form-check form-check-inline" >
            <input className="form-check-input"
                   type="radio" 
                   name="priorityOptions" 
                   id="priorityHigh"
                   value="High"
                   checked={this.state.todo_priority==='High'} 
                   onChange={this.onChangeTodoPriority}/>
            <label className="form-check-label">High </label>
        </div>
      </div>        
      <button type='submit' className='btn btn-outline-primary mt-3' >Submit</button>           
   </form>  
</div> );
    }
}
 
export default CreateTodo;



       
        
