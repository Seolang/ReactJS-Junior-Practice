import { Link } from "react-router-dom"


const MovieDetail = ({title, year, description, coverImg, runtime}) => {
    
    return (
        <div>
            <h1>{title}</h1>
            <button><Link to={`${process.env.PUBLIC_URL}/`}>{"Back To List"}</Link></button>
        </div>
    )
}

export default MovieDetail