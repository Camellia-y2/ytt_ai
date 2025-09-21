import { useState } from 'react';
import useInterval from './hooks/useInterval1';

function Counter() {
    const [count, setCount] = useState(0);                  
    useInterval(() => setCount(count + 1), 3000)
    return (
        <div>
           count: {count}
        </div>
    )
}
export default Counter;