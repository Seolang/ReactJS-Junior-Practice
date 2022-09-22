import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";


const MovieDetail = ({title, year, description, coverImg, runtime, rating, genres}) => {
    return (
        <div className={styles.movie_body}>
            <img src={coverImg} alt="cover Image" />
            <div>
                <h1>{title}</h1>
                <h1>{year}</h1>
                <ul className={styles.movie_genres}>
                    {genres.map(g => (<li key={g}>{g}</li>))}
                </ul>
                <h1>{runtime}</h1>
                <h1>{rating}</h1>
                <h1>{description}</h1>

            </div>
            <button><Link to={`${process.env.PUBLIC_URL}/`}>{"Back To List"}</Link></button>
            
        </div>
    )
}

export default MovieDetail