import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    // 더하는 함수
    setCount(count + 1);
  };

  const minusCount = () => {
    // 빼는 함수
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <form style={{
        textAlign: "center",
      }}>
        <h3>Count: {count}</h3>
        <button type="button" onClick={plusCount}>+</button>
        <button type="button" onClick={minusCount}>-</button>
        <button type="button" onClick={resetCount}>리셋</button>
      </form>
    </div>
  );
};

export default App;