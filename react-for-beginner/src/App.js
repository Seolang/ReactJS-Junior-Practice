import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App_2() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // useEffect run only the first render time.
  useEffect(() => {
    console.log("i run only once");
  }, []);

  // search run only when keyword changes
  // watching states 'keyword'
  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  // Deps could add multiple states
  useEffect(() => {
    console.log("I run when 'counter and keyword' changes");
  }, [counter, keyword]);


  return (
    <div className="App">
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
       {/*<Button text={"Continue!"} />*/}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// when useEffect function return function,
// it runs in destory
const Hello = () => {

  const byeFn = () => {
    console.log("destroyed");
  }

  const hiFn = () => {
    console.log("created");
    return byeFn;
  }

  //useEffect(hiFn, []);

  useEffect(() => {
    console.log("hi");
    return () => {
      console.log("by");
    };
  },[])

  return (
    <h1>Hello</h1>
  )
}

// useEffect Cleanup example

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(prev => !prev);
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
