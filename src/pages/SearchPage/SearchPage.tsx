import React, {useCallback, useEffect, useState} from "react";
import Wrapper from "../../components/Wrapper";
import SearchInputComponent from "./SearchInputComponent";
import MovieList from "./MovieList";
import {searchMovies} from "../../services/MovieService";
import {useDispatch, useSelector} from "react-redux";
import {MoviesState} from "../../moviesReducer";
import {addMovies, removeMovies} from "../../actions";

const SearchPage: React.FC = () => {
    const [searchString, setSearchString] = useState('Jack');

    const movies = useSelector<MoviesState, MoviesState["movies"]>((state) => state.movies);
    const dispatch = useDispatch();

    const loadMovies = useCallback(() => {
        dispatch(removeMovies());
        searchMovies(searchString)
            .then((newMovies) => {
                console.log(newMovies);
                dispatch(addMovies(newMovies));
            })
    }, [dispatch, searchString]);

    useEffect(() => {
        loadMovies();
    }, [loadMovies]);

    return (
        <Wrapper>
            <SearchInputComponent setSearchString={setSearchString}/>
            <MovieList movies={movies}/>
        </Wrapper>
    )
};

export default SearchPage;
