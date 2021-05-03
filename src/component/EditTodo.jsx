import axios from 'axios';
import React, { Component } from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.onchangedescription = this.onchangedescription.bind(this);
        this.onchangeresponsible = this.onchangeresponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmitform = this.onSubmitform.bind(this);


        this.state = { 
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: '',
            nbr : 1 ,
         };
         
    }

    componentDidMount(){

        axios.get('http://192.168.1.4/api/todo/'+this.props.match.params.id).then( 
            res=>this.setState({
                todo_description: res.data[0].description,
                todo_responsible: res.data[0].responsible,
                todo_priority: res.data[0].priority,
                todo_completed: res.data[0].complited,
            }));
    }
onchangedescription = (e)=>{
        this.setState({
            todo_description : e.target.value ,                           
        });
        
    }    
    onchangeresponsible = (e)=>{
        this.setState({
            todo_responsible: e.target.value,
        });
        console.log(this.state.todo_responsible);
    }
    onChangeTodoPriority=(e)=>{
        this.setState({
            todo_priority : e.target.value
        });
        console.log(this.state.todo_priority);
    }
    onChangeTodoCompleted=(e)=>{
        this.setState({
            todo_completed: e.target.value
        });
        console.log(this.state.todo_completed);
    }
    onSubmitform= (e) =>{
        e.preventDefault();
        let todo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible ,
            todo_priority:this.state.todo_priority ,
            todo_completed: this.state.todo_completed , 
        }
        axios.post('http://192.168.1.4/api/update/todo/'+this.props.match.params.id , todo );
        this.props.history.push('/');
    }

    
    render() { 
        
        return ( 
        <div>
            <h3> Update Todo </h3>
            <form onSubmit={this.onSubmitform} >
                <div className='form-group'>
                    <label>Description : </label>
                    <input type="text" className='form-control'
                        value={this.state.todo_description}
                        onChange={this.onchangedescription} />
                </div>
                <div className='form-group'>
                    <label>Responsible : </label>
                    <input type="text" className="form-control" 
                        value={this.state.todo_responsible}
                        onChange={this.onchangeresponsible} />
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
                <div className='form-group'>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                    type="radio" 
                    name="completedOptions" 
                    id="completed"
                    value='1'
                    checked={this.state.todo_completed==1} 
                    onChange={this.onChangeTodoCompleted}/>
                    <label className="form-check-label" >Completed</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                    type="radio" 
                    name="completedOptions" 
                    id="completed"
                    value='0'
                    checked={this.state.todo_completed== 0} 
                    onChange={this.onChangeTodoCompleted}/>
                    <label className="form-check-label" > No Completed </label>
                    </div>
                    
                </div> 
                
                
                
                
              <div>
                <button  type='submit' className='btn btn-outline-primary mt-3' >Submit</button>
                </div>        
            </form>
        </div> );
    }
}
 
export default EditTodo;


/*
<div className='form-group'>
                <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={!!this.state.todo_completed === true}
                                    value={true}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={!!this.state.todo_completed === false}
                                    value={false}
                                    />
                            <label className="form-check-label" >
                                No Completed
                            </label>
                        </div>        
                </div>
 */