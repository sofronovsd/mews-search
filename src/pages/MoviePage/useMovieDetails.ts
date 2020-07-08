import {useEffect, useState} from "react";
import {getMovieDetails, IMovie} from "../../services/MovieService";

const initialState: IMovie = {
    id: 0,
    overview: "",
    release_date: "",
    title: "",
    vote_average: 0
};

const useMovieDetails = (id:number) => {
    const [movie, setMovie] = useState(initialState);
    useEffect(() => {
        getMovieDetails(id)
            .then(setMovie)
    }, [id]);

    return movie;
};

export default useMovieDetails;
