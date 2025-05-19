import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, decrementByAmount, reset } from "../../redux/slices/CounterSlice"
import { useEffect } from "react"
function Counter() {
    let { count } = useSelector((state) => state.counter)
    let dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count))
    }, [count])
    return (
        <>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>-10</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    )
}

export default Counter