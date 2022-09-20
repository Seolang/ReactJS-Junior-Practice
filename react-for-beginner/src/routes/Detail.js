import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    // {} is object destructuring, on the other side [] is array destructuring
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = async(id) => {
        const json = 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                .then(result => result.json());
        
        setMovie(json.data.movie);
    }; 

    useEffect(() => {
        getMovie(id);
        console.log(`useEffect activated`);
    },[])

    console.log(movie);

    

    return <h1>{movie.title}</h1>
}
export default Detail;