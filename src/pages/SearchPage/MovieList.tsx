import React from "react";
import {MoviesState} from "../../moviesReducer";
import MovieItem from "./MovieItem";

const MovieList: React.FC<MoviesState> = ( {movies}) => {
    return (
        <ul>
            {
                movies.map(movie => <li key={movie.id}>
                    <MovieItem
                        id={movie.id}
                        title={movie.title}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        overview={movie.overview}
                        poster_path={movie.poster_path}
                    />
                </li>)
            }
        </ul>
    )
};

export default MovieList;
