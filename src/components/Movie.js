import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}) {

    return <div>
    <hr></hr>
    <img src={coverImg} alt={title}></img>
    <h2>
        {/* <Link to="/movie">{title}</Link> 
            Link to => 새로고침이 되지 않는 상태에서 url만 이동되게 하기 위함 a href & a tag와 같다.
        */}
        <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
        {genres.map( (g) => (
            <li key={g}>{g}</li>
        ))}
    </ul>
    </div>
    
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie