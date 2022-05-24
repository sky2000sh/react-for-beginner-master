import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue( (prev) => prev + 1);
  console.log("render");

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
