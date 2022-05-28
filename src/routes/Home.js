import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])  // useState([])을 통해 처음에 기본값으로 비어있는 []배열을 넘겨주기 때문에 coin이 처음에는 0개가 된다.

    // 
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        const json = await response.json()
        setMovies(json.data.movies);  // json, 즉 movies 얻었을 때, json의 값을 setMovies 담게한다.
        setLoading(false);  // 하지만 이와 동시에 movies 얻기를 끝냈다면, loading을 false로 바꿔줘야한다.
    }

    useEffect( () => {
        getMovies()
    }, [])

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



}


export default Home