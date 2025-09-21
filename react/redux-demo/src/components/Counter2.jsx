import useCounterStore from "../store/zustand"
const Counter2 = () => {
    const { counter, increment, decrement, reset} = useCounterStore()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter2