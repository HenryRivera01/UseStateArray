import { useState } from "react"

export const UseStateBasics = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>You clicked {count} times</h1>
        <button onClick={ () => setCount(count + 1)}>
            Click me!
        </button>
    </div>
  )
}
