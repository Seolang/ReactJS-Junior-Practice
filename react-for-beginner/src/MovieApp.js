import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const MovieApp = () => {

   return (
   <Router>
        {/* react-router-dom@6.x.x replace Switch with Routes */}
        <Routes>
            <Route path="/hello" element={<h1>Hello</h1>} />
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route basename={process.env.PUBLIC_URL} path={`/movie/:id`} element={<Detail />} />
        </Routes>
   </Router>
   );

}

export default MovieApp