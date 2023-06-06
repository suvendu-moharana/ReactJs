
import './App.css';
import {useState} from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    }
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={handleClick}>
              You pressed me {count} times
          </button>
      </header>
    </div>
  );

}


