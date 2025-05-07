import React from 'react'
import { useState } from 'react'

function Counter() {
    let [counter,setCounter]=useState(0)

    function handleIncrease(){
        setCounter(++counter)
    }
    function handleDecrease(){
        setCounter(--counter)
    }
    return (
        <>
            <button onClick={handleDecrease}>-</button>
            <span>{counter}</span>
            <button onClick={handleIncrease}>+</button>
        </>
    )
}

export default Counter