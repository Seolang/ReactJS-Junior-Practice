import styles from "./MovieDetail.module.css";


const MovieDetail = ({title, year, description, coverImg, runtime, rating, genres}) => {
    return (
        <div className={styles.movie_body}>
            <img className={styles.movie_img} src={coverImg} alt="cover" />
            <div>
                <h1 className={styles.title}>{title} ({year})</h1>
                <ul className={styles.movie_genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                <h1>{runtime}</h1>
                <h1>{rating}</h1>
                <h1>{description}</h1>

            </div>
        </div>
    )
}

export default MovieDetail