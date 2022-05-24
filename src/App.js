import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue( (prev) => prev + 1);  
  console.log("I run all the time.");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  }
  // useEffect(iRunOnlyOnce, []);
  // useEffect()함수는 코다가 딱 한번만 실행될 수 있도록 보호해준다.
  useEffect( () => {
    console.log("Call the API...");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
  /* import Button from "./Button"; */
  /* import styles from "./App.module.css"; */
  /* <h1 className={styles.title}>Welcome back!!!</h1> */
  /* <Button onClick={onCLick} text={"Continue"} /> */
}

export default App;
