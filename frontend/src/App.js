import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    document.title = `${count} times clicked`;
  }, [count]);

  const startIncrement = () => {
    if (intervalRef.current) return; // すでに動いてたら何もしない

    intervalRef.current = setInterval(() => {
      setNumber((num) => num + 1);
    }, 100);
  };

  const stopIncrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startDecrement = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setNumber((num) => (num > 0 ? num - 1 : 0));
    }, 100);
  };

  const stopDecrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <hr />
      <div class="timers-container">
        <h2>Count is {count} now!</h2>
        <p>Click to count</p>
        <div class="button-container">
          <button class="ascendant" onClick={() => setCount(count + 1)}>
            Ascendant
          </button>
          <button
            class="descendant"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            Descendant
          </button>

          <button class="clear" onClick={() => setCount(0)}>
            Clear
          </button>
        </div>
        <hr />
        <h2>counter goes {number} !!! wow</h2>
        <p>Hold click to keep counting</p>
        <div class="button-container">
          <button
            class="ascendant"
            onMouseDown={startIncrement}
            onMouseUp={stopIncrement}
            onMouseLeave={stopIncrement}
          >
            Ascendant
          </button>
          <button
            class="descendant"
            onMouseDown={startDecrement}
            onMouseUp={stopDecrement}
            onMouseLeave={stopDecrement}
          >
            Descendant
          </button>
          <button class="clear" onClick={() => setNumber(0)}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
