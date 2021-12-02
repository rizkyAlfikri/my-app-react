import React from "react";
import {TemaSitus} from './App'

let reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const CounterComponent = (props) => {
    const [counter, dispatch] = React.useReducer(reducer, 0)

    let tema = React.useContext(TemaSitus)

    return <div>
        <button onClick={(e) => dispatch({ type: 'DECREMENT' })}> - </button>
        <br />
        {counter}
        <br />
        <button onClick={(e) => dispatch({ type: 'INCREMENT' })}> + </button>
        <br />
        Tema situs sekarang adalah {tema}
    </div>
}

export default CounterComponent