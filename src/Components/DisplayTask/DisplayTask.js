import React from 'react'
import Aux from '../../HOC/Aux'

const displayTask = (props) => {

    let lists = props.values.map(todo => {
        return <li>{todo}</li>
    }) 

    return (
        <Aux>
            <ul>
                {lists}
            </ul>   
        </Aux>
    )
}

export default displayTask