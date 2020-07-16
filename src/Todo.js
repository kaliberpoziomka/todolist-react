import React from 'react'

const Todo = ({todos, removeItem}) => {
    return todos.length && todos.map(todo => {
        return(
            <div className="card" key={todo.id}>
                <div className="card-content">
                    <h1>{todo.title}</h1>
                    <p>{todo.content}</p>
                </div>
                <button className="button btn pink" onClick={() => {removeItem(todo.id)}}>DELETE</button>
            </div>
        )
    })
}

export default Todo