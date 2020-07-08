import React from "react";
import Wrapper from "../../components/Wrapper";
import useMovieDetails from "./useMovieDetails";
import {IMovie} from "../../services/MovieService";
import MovieDetails from "../../components/MovieDetails";

interface IMoviePage {
    match: {
        params: {
            id: string
        }
    }
}

const MoviePage: React.FC<IMoviePage> = (props) => {
    const id: number = Number(props.match.params.id);
    const movie: IMovie = useMovieDetails(id);

    return (
        <Wrapper>
            <MovieDetails>
                <h1>{movie.title}</h1>
                <img width={300} height={450} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="poster" />
                <p>{movie.overview}</p>
                <p>{`Release date: ${movie.release_date}`}</p>
                <p>{`Vote average: ${movie.vote_average}`}</p>
            </MovieDetails>
        </Wrapper>
    )
};

export default MoviePage;
