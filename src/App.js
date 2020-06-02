import React, {Component} from 'react';
import ToDoMainSec from './Components/ToDoMainSection'
import Aux from './HOC/Aux'
import './App.css';
import DisplayTask from './Components/DisplayTask/DisplayTask'

class App extends Component{

  state = {
    Lists : []
  };
  
  updateTodo = (todo) => {
    this.setState({
      Lists :[todo , ...this.state.Lists]
    })
  }

  render(){
    return (
      <Aux className="container">
          <div className=" App">
            <ToDoMainSec onSubmit = {this.updateTodo}/>
            <DisplayTask toDoList = {this.state.Lists}/>
            {/* {JSON.stringify(this.state.Lists)} */}
          </div>
      </Aux>
    );
  }
}

export default App;
