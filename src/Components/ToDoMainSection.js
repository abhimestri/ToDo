import React, {Component} from 'react'
import Aux from '../HOC/Aux'
import axios from '../axiosInstance';


class toDoMainSection extends Component{

    state = {
        value: ""
    };

      inputChanges = (e) => {
        this.setState({
            value :e.target.value
        })
      }


      updateList = (e) => {
        e.preventDefault();
        this.props.onSubmit({
          value:this.state.value,
          complete : false
        })
        this.setState({value : ''})
      }

      storeToDB = () => {
        let data = { 
          todoList : [...this.props.DataBaseUpdate]
        };
        axios.post('/todoData.json', data);
      }

      render(){
        return (
            <Aux>
                <div>
                    <h1 className="mb-4">To-Do List</h1>
                    <form onSubmit={this.updateList}>
                        <label>enter your task here</label>
                        <input value = {this.state.value}className="form-control"type="text" placeholder="enter your to do task..." onChange={this.inputChanges}/>
                    </form>
                        <button className="btn btn-block btn-outline-primary mt-5" onClick = {this.updateList} > Submit </button>
                        <button className="btn btn-block btn-outline-dark mt-4" onClick={this.storeToDB}>Store to Database</button>
                </div>
            </Aux>
        )
      }
}

export default toDoMainSection