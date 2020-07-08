import React from "react";
import Wrapper from "../../components/Wrapper";
import useMovieDetails from "./useMovieDetails";
import {IMovie} from "../../services/MovieService";

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
            <section>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </section>
        </Wrapper>
    )
};

export default MoviePage;
