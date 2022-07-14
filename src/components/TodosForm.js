import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../actions/todos"

import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const TodosForm = () => {
    const inputRef = useRef(null)
    const formRef = useRef(null)
    const dispatch = useDispatch()

    const {t} = useTranslation()


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
                        placeholder={t("placeholder")}
                        ref={inputRef}
                    />
                </div>
                <button className="btn btn-success">{t("add_btn_name")}</button>
            </form>
        </div>

    )
}

export default TodosForm