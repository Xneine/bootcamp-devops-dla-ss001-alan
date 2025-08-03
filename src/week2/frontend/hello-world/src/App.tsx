import { useState } from "react";
import "./App.css";

function App() {
  const [greet, setGreet] = useState("");
  async function sayHello() {
    try {
      const response = await fetch("http://localhost:3002/hello");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGreet(data.greet);
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }
  const reset = () => {
    setGreet("");
  };
  return (
    <>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={sayHello}>click me</button>
      </div>
      <div className="card">
        <button onClick={reset}>reset</button>
      </div>
      <p>{greet}</p>
    </>
  );
}

export default App;
