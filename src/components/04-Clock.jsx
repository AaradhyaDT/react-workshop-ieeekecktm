// DEMO 4 — Hooks (useEffect)
// useEffect runs side effects — here, a live clock that updates every second.

import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer) // cleanup on unmount
  }, []) // empty deps = run once on mount

  return (
    <div className="demo-card">
      <h2>{time.toLocaleTimeString()}</h2>
      <p>Updates every second via useEffect + setInterval.</p>
    </div>
  )
}

export default Clock
