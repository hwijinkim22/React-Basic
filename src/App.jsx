import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => { // 더하는 함수
    setCount(count + 1);
  }

  const minusCount = () => { // 빼는 함수
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
    <h3>Count: {count}</h3>
    <button onClick={plusCount}>+</button>
    <button onClick={minusCount}>-</button>
    <button onClick={resetCount}>리셋</button>
    </>
  )
}

export default App