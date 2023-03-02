import React from 'react'
import { useTranslation } from 'react-i18next'

const TodosFooter = () => {
    const {t} = useTranslation()

    return (
        <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-primary">{t("status_todo_all")}</button>
            <button className="btn btn-warning">{t("status_todo_completed", {ok: "jjjdj"})}</button>
            <button className="btn btn-secondary">{t("status_todo_active")}</button>
        </div>)
}

export default TodosFooter