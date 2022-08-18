import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disalble, setDisalble] = useState(false);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const on_off = () => {
    setDisalble(!disalble);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="plus-button"
          onClick={() => setCount((prev) => prev + 1)}
          disabled={disalble}
        >
          +
        </button>
        <button data-testid="minus-button" onClick={minus} disabled={disalble}>
          -
        </button>
        <button
          data-testid="on/off"
          style={{ backgeoundcolor: "blue" }}
          onClick={on_off}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
