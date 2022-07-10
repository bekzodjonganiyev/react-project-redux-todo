import { TODO } from "../types/todos"

const initialState = []


export const todos = (state = initialState, action) => {
    switch (action.type) {
        case TODO.ADD_TODO:
            return [...state, action.payload]
        case TODO.REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id)
        case TODO.ISDONE_TODO:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone
                    }
                } else {
                    return {
                        item
                    }
                }
            })
        default:
            return state
    }

}