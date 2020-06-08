import React, {Component} from 'react';
import ToDoMainSec from './Components/ToDoMainSection'
import Aux from './HOC/Aux'
import './App.css';
import DisplayTask from './Components/DisplayTask/DisplayTask'
import {BrowserRouter} from 'react-router-dom'

class App extends Component{

  state = {
    Lists : []
  };
  
  updateTodo = (todo) => {
    console.log(todo)
    this.setState({
      Lists :[todo , ...this.state.Lists]
    })
  }

  deleteTodos = (id) => {
     let tempArray = [...this.state.Lists];
     tempArray.splice(id,1);
     this.setState({Lists : [...tempArray]})
  }

  render(){
    return (
      <BrowserRouter>
              <Aux >
                  <div className=" App">
                    <ToDoMainSec Lists = {this.state.Lists} DataBaseUpdate = {this.state.Lists} onSubmit = {this.updateTodo}/>
                    <div className="display-todo-list">
                      <DisplayTask toDoList={this.state.Lists} deleteTodo = {this.deleteTodos}/>  
                    </div>
                  </div>
              </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
