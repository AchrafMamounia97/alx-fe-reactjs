import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count -1);
    const reset = () => setCount(0);
    return (
        <div style= {{ textAlign: 'center', margin: '20px' }}>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
        </div>
    );

}
export default Counter;