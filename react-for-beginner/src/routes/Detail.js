import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";


const Detail = () => {
    // {} is object destructuring, on the other side [] is array destructuring
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const getMovie = async(id) => {
        const json = 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                .then(result => result.json());
        
        setMovie(json.data.movie);
        setLoading(false);
    }; 

    useEffect(() => {
        getMovie(id);
        //console.log(`useEffect activated`);
    },[])

    console.log(movie);

    return (
        <div className={styles.container}>
            {loading ? 
                <div className={styles.loader}>
                    Loading...
                </div> 
            : (
                <div className={styles.movie}>
                    <h1 className={styles.backbtn}>
                        <Link to={`${process.env.PUBLIC_URL}/`}>{"<- Back To List"}</Link>
                    </h1>
                    <MovieDetail 
                        title={movie.title} 
                        year={movie.year}
                        description={movie.description_full}
                        coverImg={movie.large_cover_image}
                        runtime={movie.runtime}
                        rating={movie.rating}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>

    )
}
export default Detail;