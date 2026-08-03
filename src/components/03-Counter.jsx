// DEMO 3 — State (useState)
// State is data that changes over time and triggers a re-render when updated.

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="demo-card">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
