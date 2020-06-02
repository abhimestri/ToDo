import React, {Component} from 'react'
import './DisplayTask.css'
import Aux from '../../HOC/Aux'


class DisplayTask extends Component {

    render(){
    let enteredList = this.props.toDoList;
    let res = enteredList.map((todo,i) => {
        return (
                <li className="todo-list-item" key={i} >{todo.value}
                    <button  className="btn btn-outline-danger deleteLogo" data-toggle="tooltip" data-placement="left" title="delete this todo" onClick={() => this.props.deleteTodo(i)} key={i}>x</button>
                </li>
        )
        })

        return (
            <Aux>
                <ul>
                    {res}
                </ul>   
            </Aux>
        )
    }
}

export default DisplayTask