import React from 'react'
import TodoItem from './TodoItem'

import { useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'


const TodoItems = () => {
    const {t} = useTranslation()

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
                        <TodoItem key={item.id} textProps={t("dynamic_content", {dynamic: item.text})} id={item.id} isDone={item.isDone} />
                    )
                    : <h3 className='text-center my-3 text-secondary'>{t("todos_not_yet")}</h3>
            }
        </ul>
    )
}

export default TodoItems