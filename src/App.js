import { useState } from "react";

//import { useState, useEffect } from "react";
// 22.05.24
/*
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue( (prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");

  // useEffect(iRunOnlyOnce, []);
  // useEffect()함수는 코드가 딱 한번만 실행될 수 있도록 보호해준다. react.js가 동작하는 관점에서 본다면 일종의 방어막 같은 것.
  // useEffect를 통해 언제 코드를 실행할지 선택권을 가질 수 있다.
  useEffect( () => {
    console.log("The code runs here only once.");
  }, []);  // 배열 상태 부분이 뜻하는 것은 dependency이며 그 안에 인자값이 아무것도 없게되면 그저 한번만 실행하게 된다.
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
  // import Button from "./Button";
  // import styles from "./App.module.css";
  // <h1 className={styles.title}>Welcome back!!!</h1>
  // <Button onClick={onCLick} text={"Continue"} />
}
*/

// CleanUp()함수 => 그냥 일반적인 함수인데, component가 없어질때 코드 수행을 할 수 있도록 해준다. 예) 없어질 때 어떤 분석결과를 받고자 할때, event listener를 지우거나 console을 뿌려주기 등등 
// 22.05.24
/*
function Hello() {
  useEffect( () => {
    console.log("created :)")
    return () => console.log("destroyed :(")
  }, []) 
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing( (prev) => !prev )

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
*/

// 22.05.25
// ToDo list 만들기
function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();    
    if(toDo === "") {
      return;
    }
    
    // ...의 의미는 현 currentArray 배열에
    // toDo input 글씨들이 엔터로써 넘어가게 된다면(onSubmit)
    // 그 글씨들이 아무것도 들어있지 않은 빈 Array의 element로 더해진다는 의미
    setToDos((currentArray) => [toDo, ...currentArray] )  
    setToDo("")
  }
  console.log("toDos : ", toDos)
  

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      
    </div>
  );
}



export default App;
