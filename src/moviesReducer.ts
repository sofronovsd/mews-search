import {Action} from "./actions";
import {IMovie} from "./services/MovieService";

export interface MoviesState {
    movies: IMovie[]
}

const initialState = {
    movies: []
};

export const moviesReducer = (state: MoviesState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_MOVIES": {
            return { ...state, movies: [...state.movies.concat(action.payload)]}
        }
        case "REMOVE_MOVIES": {
            return { ...state, movies: []}
        }
        default: {
            return state;
        }
    }
};
