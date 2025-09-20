import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../store/store'
export default function Counter () {
    // 获取状态
    const count = useSelector(state => state.counter.value)
    // 获取dispatch方法
    const dispatch = useDispatch();
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>重置</button>
        </>
    )
}