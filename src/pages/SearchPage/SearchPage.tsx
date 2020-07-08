import React, {useCallback, useEffect, useState} from "react";
import Wrapper from "../../components/Wrapper";
import SearchInputComponent from "./SearchInputComponent";
import MovieList from "./MovieList";
import {searchMovies} from "../../services/MovieService";
import {useDispatch, useSelector} from "react-redux";
import {MoviesState} from "../../moviesReducer";
import {addMovies, removeMovies} from "../../actions";
import Loader from "./Loader";

const SearchPage: React.FC = () => {
    const [searchString, setSearchString] = useState('Jack');
    const [loading, setLoading] = useState(true);

    const movies = useSelector<MoviesState, MoviesState["movies"]>((state) => state.movies);
    const dispatch = useDispatch();

    const loadMovies = useCallback(() => {
        setLoading(true);
        dispatch(removeMovies());
        searchMovies(searchString)
            .then((newMovies) => {
                console.log(newMovies);
                dispatch(addMovies(newMovies));
            })
            .then(() => setLoading(false))
    }, [dispatch, searchString]);

    useEffect(() => {
        loadMovies();
    }, [loadMovies]);

    return (
        <Wrapper>
            <SearchInputComponent setSearchString={setSearchString}/>
            {loading ? <Loader/>
                : <MovieList movies={movies}/>
            }
        </Wrapper>
    )
};

export default SearchPage;
