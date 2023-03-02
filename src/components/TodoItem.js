import React, { useState, useRef } from 'react'
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'

import { removeTodo, completedTodo, editTodo } from '../actions/todos'
import EditBtn from "../assets/images/edit.png"
import { DeleteIcon } from '../assets/icons/Icons'


const TodoItem = ({ textProps, id, isDone }) => {
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(textProps)
    const [show, setShow] = useState(false)

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

    const notify = () => toast.error("On editing delete function is disable");

    return (
        <li
            className="height list-group-item d-flex justify-content-between align-item-center"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div
            >

                <input
                    className={`align-middle rounded-checkbox me-2 ${edit ? "none" : ""}`}
                    type="checkbox"
                    value=""
                    onChange={handleMark}
                />
                <label
                    className={`align-middle form-check-label ${isDone ? "text-decoration-line-through" : ""} ${edit ? "none" : ""}`}
                    style={{ fontSize: "18px" }}
                    onDoubleClick={
                        () => {
                            setEdit(true)
                            setShow(false)
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
            <ToastContainer/>

                </div>

            </div>

            <button
                className={`align-middle btn text-danger ${show ? "show" : "hide"}`}
                onClick={() => {
                    if (edit) {
                        notify()
                    }
                    else {

                        dispatch(removeTodo(id))
                    }
                }
                }
            ><DeleteIcon width="20" height="20" /></button>
        </li>
    )
}

export default TodoItem