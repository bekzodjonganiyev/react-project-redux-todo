import React, { useRef } from 'react'

const TodosForm = () => {
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return (
        <div className="card-body">
            <form
                className="mb-3 d-flex justify-content-between align-item-center"
                onSubmit={handleSubmit}
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