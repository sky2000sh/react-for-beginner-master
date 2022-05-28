import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function Detail() {
    
    const {id} = useParams()
    console.log('id param은? :', id)

    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])

    useEffect( () => {
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log('detail의 json? :', json)
        setMovie(json.data.movie)
        setLoading(false)
    }

    //useEffect( () => {
        getMovie()
    }, [id])

    return (
    <div>
        <h1>Detail</h1>
        {loading ? (
            <strong>Loading...</strong>
            ) : (
            <div>
                <img src={movie.background_image} alt={movie.title}/>
                <br></br>
                {movie.title}
                <br></br>
                {movie.rating}
                <br></br>
                {movie.like_count}
                <br></br>
                {movie.description_intro}
                <br></br>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </div>
            ) }
    </div>
    



    )

}

export default Detail