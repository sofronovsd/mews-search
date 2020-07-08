import React from "react";
import {IMovie} from "../../services/MovieService";
import MovieRow from "../../components/MovieRow";

const MovieItem: React.FC<IMovie> = (movie) => {
    return (
        <MovieRow>
            <span>{movie.title}</span>
            <span>{movie.release_date}</span>
            <span>{movie.vote_average}</span>
        </MovieRow>
    )
};

export default MovieItem;
