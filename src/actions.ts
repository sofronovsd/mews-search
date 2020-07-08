import {IMovie} from "./services/MovieService";

export type Action = {type: string, payload: IMovie[]}

export const addMovies = (movies:IMovie[]):Action => ({
    type: "ADD_MOVIES",
    payload: movies
});

export const removeMovies = ():Action => ({
    type: "REMOVE_MOVIES",
    payload: []
});
