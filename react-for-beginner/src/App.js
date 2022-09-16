import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  }
  console.log("i run all the time");

  useEffect(() => {
    console.log("Call the API");
  }, []);
  // useEffect run only the first render time.

  return (
    <div className="App">
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue!"}/>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
