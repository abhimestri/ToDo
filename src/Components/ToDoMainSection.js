import React, {Component} from 'react'
import Aux from '../HOC/Aux'

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

      render(){
        return (
            <Aux>
                <div>
                    <h1 className="mb-4">To-Do List</h1>
                    <form >
                        <label>enter your task here</label>
                        <input className="form-control"type="text" placeholder="enter your to do task..." onChange={this.inputChanges}/>
                    </form>
                        <button className="btn btn-block btn-outline-dark mt-5" onClick = {this.updateList} >submit</button>
                        <button className="btn btn-block btn-outline-primary mt-4" onClick={this.showList}>submit</button>
                </div>
            </Aux>
        )
      }
}

export default toDoMainSection