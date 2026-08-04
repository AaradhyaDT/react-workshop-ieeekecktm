import Student from './components/students';
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Student name="John Doe" age={20} faculty="Engineering"/>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
            Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
            Decrease
            </button>

            <button onClick={() => setCount(0)}>
            Reset
            </button>
        </div>
        
    );
}

export default App;