import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue( (prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");

  // useEffect(iRunOnlyOnce, []);
  // useEffect()함수는 코드가 딱 한번만 실행될 수 있도록 보호해준다.
  useEffect( () => {
    console.log("The code runs here only once.");
  }, []);  // 배열 상태 부분이 인자값이 아무것도 없게되면 그저 한번만 실행하게 된다.
  useEffect( () => {
    console.log("The code now runs when 'keyword' changes.")
    // if(keyword !== "" && keyword.length > 5) {
    //   console.log("SEARCH FOR", keyword)
    // }    
  }, [keyword]);  // [keyword] => 이 keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주게된다.
  useEffect( () => {
    console.log("The code now runs when 'counter' changes.")
  }, [counter]);
  useEffect( () => {
    console.log("The code now runs when 'keyword' & 'counter' changes.")
  }, [keyword, counter]);
  

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..."></input>
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
