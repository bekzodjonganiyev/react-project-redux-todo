import React from 'react'
import TodoItem from './TodoItem'

import { useSelector } from "react-redux"


const TodoItems = () => {
    const todos = useSelector(state => {
        if (state.todos) {
            return state.todos
        }
        else {
            return JSON.parse(window.localStorage.getItem("todos"))
        }
    }
    )

    return (
        <ul className="list-group list-group-flush">
            {
                todos.length > 0
                    ? todos.map((item) =>
                        <TodoItem key={item.id} textProps={item.text} id={item.id} isDone={item.isDone} />
                    )
                    : <h3 className='text-center my-3 text-secondary'>Todos not created yet</h3>
            }
        </ul>
    )
}

export default TodoItems