import React from 'react'
import { useDispatch } from "react-redux"
import { removeTodo, completedTodo } from '../actions/todos'


const TodoItem = ({ text, id, isDone }) => {
    const dispatch = useDispatch()

    const handleMark = (e) => {
        dispatch(completedTodo({
            id,
            text,
            isDone: e.target.checked
        }))
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-item-center">
            <div>
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onChange={handleMark}
                />
                <label
                    className={`form-check-label ${isDone ? "text-decoration-line-through" : ""}`}
                    htmlFor="flexCheckDefault">{text}</label>
            </div>

            <button
                className="btn btn-danger"
                onClick={() => dispatch(removeTodo(id))}
            >Remove</button>
        </li>)
}

export default TodoItem