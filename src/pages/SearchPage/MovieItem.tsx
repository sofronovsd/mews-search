import React from "react";
import {IMovie} from "../../services/MovieService";
import MovieRow from "../../components/MovieRow";
import {Link} from "react-router-dom";

const MovieItem: React.FC<IMovie> = (movie) => {
    return (
        <Link to={`/movie/details/${movie.id}`} target="_blank">
            <MovieRow>
                <span>{movie.title}</span>
                <span>{movie.release_date}</span>
                <span>{movie.vote_average}</span>
            </MovieRow>
        </Link>
    )
};

export default MovieItem;
