import styles from "./MovieDetail.module.css";
import { FaStar } from 'react-icons/fa';


const MovieDetail = ({title, year, description, coverImg, runtime, rating, genres}) => {

    const rateStars = 150*rating/10;

    return (
        <div className={styles.movie_body}>
            <div className={styles.movie_img_body}>
                <img className={styles.movie_img} src={coverImg} alt="cover" />
                <div className={styles.movie_rating_body}>
                    <div style={{width:`${rateStars}px`, overflow:`hidden`, whiteSpace:`nowrap`}}>
                        <FaStar size={`30px`} color={`#f85454`} />
                        <FaStar size={`30px`} color={`#f85454`} />
                        <FaStar size={`30px`} color={`#f85454`}/>
                        <FaStar size={`30px`} color={`#f85454`} />
                        <FaStar size={`30px`} color={`#f85454`} />
                    </div>
                    <div className={styles.movie_rating}>{rating}</div>
                </div>
            </div>
            <div className={styles.movie_info_body}>
                <div className={styles.title}>{title} ({year})</div>
                <div className={styles.runtime}>Run Time : {runtime} Minutes</div>
                <ul className={styles.movie_genres}>
                    {genres.map((g) => (
                        <li key={g}>#{g}</li>
                    ))}
                </ul>
                <div className={styles.descriptionName}>Description</div>
                <div className={styles.line}></div>
                <div className={styles.description}>{description}</div>
            </div>

        </div>
    )



    
    /*
    return (
        <div className={styles.movie_body}>
            <div className={styles.movie_img_body}>
                
            </div>
            <div>
                

            </div>
        </div>
    )
    */
}

export default MovieDetail