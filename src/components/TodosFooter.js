import React from 'react'

const TodosFooter = () => {
    return (
        <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-warning">Completed</button>
            <button className="btn btn-secondary">Active</button>
        </div>)
}

export default TodosFooter