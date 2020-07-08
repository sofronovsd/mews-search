import React from "react";
import {IMovie} from "../../services/MovieService";
import MovieRow from "../../components/MovieRow";
import {Link} from "react-router-dom";

const MovieItem: React.FC<IMovie> = (movie) => {
    return (
        <Link to={`/movie/details/${movie.id}`}>
            <MovieRow>
                    <img className="poster" src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${movie.poster_path}`} alt="poster" />
                    <div style={{padding: "0 1rem"}}>
                        <h4 style={{margin: "0.5rem 0"}}>{movie.title}</h4>
                        <span>{`Release - ${movie.release_date}`}</span>
                        <div style={{width: "100%", height: "50px"}}>
                        <p className="hidden-text">{movie.overview}</p>
                        </div>
                    </div>
            </MovieRow>
        </Link>
    )
};

export default MovieItem;
