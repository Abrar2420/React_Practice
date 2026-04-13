import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1);

      setCounter(counter + 1);

      setCounter(counter + 1);
      console.log(counter);
    }
  };
  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={add}>Increment</button>
      <span> --- </span>
      <button onClick={remove}>Decrement</button>
    </>
  );
}

export default App;
