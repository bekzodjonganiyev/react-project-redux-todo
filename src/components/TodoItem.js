import React from 'react'

const TodoItem = ({text, id}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-item-center">
            <div>
                <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">{text}</label>
            </div>

            <button className="btn btn-danger">Remove</button>
        </li>)
}

export default TodoItem