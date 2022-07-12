import { TODO } from "../types/todos"

const initialState = JSON.parse(localStorage.getItem("todos")) || []


export const todos = (state = initialState, action) => {
    switch (action.type) {
        case TODO.ADD_TODO:
            localStorage.setItem("todos", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        case TODO.REMOVE_TODO:
            localStorage.removeItem("todos")
            return state.filter(item => item.id !== action.payload.id)
        case TODO.ISDONE_TODO:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone
                    }
                } else {
                    return item
                }
            })
        case TODO.EDIT_TODO:
            const updateContact = state.map(item => item.id === action.payload.id ? action.payload : item)
            state = updateContact
            localStorage.setItem("todos", JSON.stringify(state))
            return state
        default:
            return state
    }

}