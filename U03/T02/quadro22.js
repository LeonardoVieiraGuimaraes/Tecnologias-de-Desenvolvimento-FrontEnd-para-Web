// HOOKS
// Quadro 21 – Utilizando o Hook useState
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}
export default Counter;
