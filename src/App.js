//import { useEffect, useState } from "react";
//import Movie from "./components/Movie";

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
/*
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
      <hr/>
        <ul>
          {toDos.map( (item, index) => (
            <li key={index}>{item}</li>
            // key는 고유의 값(unique)이어야 한다.
            // map 함수에 대한 문서를 찾아보면 첫번째 argument는 value여야하고, 이 value는 각각의 toDo들을 의미한다.
            // 두번째 argument는 index이며, 현재 index는 number로 되어있다.
            // 즉, 한 개씩 더해질때마다 index의 숫자는 1,2,3,4로 채워지면서 toDo 들이 배열에 담아지게 된다.
          ) )}
        </ul>
    </div>
  );
}
*/

// 22.05.25
// Coin Tracker 암호화폐 리스트 만들기
/*
function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( response => response.json() )
    .then( (json) => {
      setCoins(json);  // json, 즉 coins를 얻었을 때, json의 값을 setCoins에 담게한다.
      setLoading(false);  // 하지만 이와 동시에 coins 얻기를 끝냈다면, loading을 false로 바꿔줘야한다. 
    })
  }, [])
  
  // const [coins, setCoins] = useState([])을 통해 처음에 기본값으로 비어있는 []배열을 넘겨주기 때문에 coin이 처음에는 0개가 된다.
  return (
    <div>
      <h1>The Coins! { loading ? "" : `(now there are ${coins.length.toLocaleString()} coins)` }</h1>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <select>
          {coins.map( (coins) => (
            <option>
              {coins.name} ({coins.symbol}): ({coins.quotes.USD.price} USD )
            </option>
          ))}
        </select>
        ) }
    </div>
  );
}
*/
/*
<ul>
  {coins.map( (coins) => (
    <li>
      {coins.name} ({coins.symbol}): ({coins.quotes.USD.price} USD )
    </li>
  ))}
</ul>
*/

// 22.05.26
/*
function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])  // useState([])을 통해 처음에 기본값으로 비어있는 []배열을 넘겨주기 때문에 coin이 처음에는 0개가 된다.

  // 
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    const json = await response.json()
    setMovies(json.data.movies);  // json, 즉 movies 얻었을 때, json의 값을 setMovies 담게한다.
    setLoading(false);  // 하지만 이와 동시에 movies 얻기를 끝냈다면, loading을 false로 바꿔줘야한다.
  }

  // 또는 wrapping으로써 아랫 명령어도 가능하다.
  // const getMovies = async() => {
  //   const json = await ( await fetch ("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
  //                       ).json()
  //                       setMovies(json.data.movies)
  //                       setLoading(false)
  // }

  useEffect( () => {
    getMovies()
  }, [])

  // 아래 useEffect()함수 fetch를 나열하는 대신 요즈음에는, 맨 윗 명령어로 한다.
  // useEffect( () => {
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
  //   .then( response => response.json() )
  //   .then( (json) => {
  //     setMovies(json.data.movies);  // json, 즉 movies 얻었을 때, json의 값을 setMovies 담게한다.
  //     setLoading(false);  // 하지만 이와 동시에 movies 얻기를 끝냈다면, loading을 false로 바꿔줘야한다.
  //   })
  // }, [])

  console.log('movies? : ', movies)
  return (
    <div>      
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <div>{movies.map( (movie) => (
          <Movie
            key={movie.id}  // key는 React.js에서만, 특히 map안에서 component들을 rendering할 때 사용한다.
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres} />
          ))}
        </div>
        ) }
    </div>
  );

  
  // return (
  //   <div>      
  //     {loading ? (
  //       <strong>Loading...</strong>
  //       ) : (
  //       <div>{movies.map( (movie) => (
  //         <div key={movie.id}>
  //           <hr></hr>
  //           <img src={movie.medium_cover_image}></img>
  //           <h2>{movie.title}</h2>
  //           <p>{movie.summary}</p>
  //           <ul>
  //             {movie.genres.map( (g) => (
  //               <li key={g}>{g}</li>
  //             ))}
  //           </ul>
  //           </div>
  //         ))}
  //       </div>
  //       ) }
  //   </div>
  // );
  
}
*/

import {
  BrowserRouter as Router,
  // HashRouter는 일반적인 localhost:3000/home 형태가 아닌 localhost:3000/#/home 형태이다.
  Routes,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Routes>
  </Router>
}


//api.coinpaprika.com/v1/tickers
export default App;
