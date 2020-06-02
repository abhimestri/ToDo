import React from 'react'
import Aux from '../../HOC/Aux'

const displayTask = (props) => {

    let enteredList = props.toDoList;
    let res = enteredList.map((todo,i) => {
        return <li key={i}>{todo.value}</li>
    })

    return (
        <Aux>
            <ul>
                {res}
            </ul>   
        </Aux>
    )
}

export default displayTask