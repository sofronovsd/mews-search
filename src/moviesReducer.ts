import {Action} from "./actions";

export interface MoviesState {
    movies: string[]
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
