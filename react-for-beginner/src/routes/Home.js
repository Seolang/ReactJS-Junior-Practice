import { useEffect, useState } from "react"
import Movie from "../components/Movie";
import styles from "./Home.module.css";



const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) =>(
                        <Movie 
                            // key used only and must be exist  in React.js, for rendering compnents in 'map'
                            key={movie.id}
                            id={movie.id}
                            // props name don't have to be same as API data
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;