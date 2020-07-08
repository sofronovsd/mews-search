import React from "react";
import {MoviesState} from "../../moviesReducer";

const MovieList: React.FC<MoviesState> = ( {movies}) => {
    return (
        <ul>
            {movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
    )
};

export default MovieList;
