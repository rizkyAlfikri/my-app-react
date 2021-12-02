import React from "react";

function reducer(todos, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let nextId = todos.length ? todos[todos.length - 1].id + 1 : 1
            return [...todos, { id: nextId, completed: false, ...action.todo }]

        case 'REMOVE_TODO':
            return todos.filter((todo) => todo.id !== action.id)

        case 'UPDATE_TODO':
            return todos.map((todo) => todo.id === action.todo.id ? action.todo : todo)

        case 'TOGGLE_COMPLETED':
            return todos.map((todo) => todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo)

        default:
            return todos
    }
}


const TodoList = () => {

}