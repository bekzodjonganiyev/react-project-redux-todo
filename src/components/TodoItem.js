import React, { useState, useRef } from 'react'
import { useDispatch } from "react-redux"
import { removeTodo, completedTodo, editTodo } from '../actions/todos'
import EditBtn from "../assets/images/edit.png"

const TodoItem = ({ textProps, id, isDone }) => {
    const dispatch = useDispatch()

    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(textProps)

    const editText = useRef()

    const handleMark = (e) => {
        const toLocalStorage = {
            id,
            text,
            isDone: e.target.checked
        }
        dispatch(completedTodo(toLocalStorage))
    }

    const handleEdit = () => {

        const data = {
            id,
            text,
            isDone
        }

        dispatch(editTodo(data))
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-item-center">
            <div>
                <input
                    className={`rounded-checkbox me-2 ${edit ? "none" : ""}`}
                    type="checkbox"
                    value=""
                    onChange={handleMark}
                />
                <label
                    className={`form-check-label ${isDone ? "text-decoration-line-through" : ""} ${edit ? "none" : ""}`}
                    style={{ fontSize: "18px" }}
                    onDoubleClick={
                        () => {
                            setEdit(true)
                        }
                    }
                >
                    {text}
                </label>

                {/* Edit function here */}
                <div className='d-flex'>
                    <input
                        className={`${edit ? "block" : "none"}`}
                        type="text"
                        value={text}
                        ref={editText}
                        onChange={(e) => setText(e.target.value)}
                        onTouchEnd={() => console.log(text)}
                    />
                    <button
                        className={`btn ${edit ? "block" : "none"}`}
                        onClick={() => {
                            setText(editText.current.value)
                            handleEdit()
                            setEdit(false)
                        }}
                    >
                        <img src={EditBtn} alt="edit" width="20" height="auto" />
                    </button>
                </div>

            </div>

            <button
                className="btn btn-danger"
                onClick={() => dispatch(removeTodo(id))}
            >Remove</button>
        </li>)
}

export default TodoItem