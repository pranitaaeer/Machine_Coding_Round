
import { useState } from "react"
import "../style/counter.css"
const Counter = () => {
    const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => (prev === 0 ? 0 : prev - 1))
  const reset = () => setCount(0)
  return (
    <div className="main">
      <div className="container">
        <h1>Counter</h1>
        <p className="count">{count}</p>

        <div className="actions">
          <button onClick={decrement} disabled={count === 0}>
            − Decrement
          </button>
          <button onClick={increment}>+ Increment</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter