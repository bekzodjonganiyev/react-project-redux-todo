import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../actions/todos"

import { v4 as uuidv4 } from 'uuid';

const TodosForm = () => {
    const inputRef = useRef(null)
    const formRef = useRef(null)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        const item = {
            id: uuidv4(),
            text: inputRef.current.value,
            isDone: false
        }
        localStorage.setItem("todos", JSON.stringify(item))
        dispatch(addTodo({
            ...item
        }))
        formRef.current.reset()
    }

    return (
        <div className="card-body">
            <form
                className="mb-3 d-flex justify-content-between align-item-center"
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <div>
                    <input
                        type="text"
                        id="exampleFormControlInput"
                        className="form-control"
                        placeholder="e.g. Buy eggs"
                        ref={inputRef}
                    />
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </div>

    )
}

export default TodosForm