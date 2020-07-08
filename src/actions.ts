export type Action = {type: string, payload: string[]}

export const addMovies = (movies:string[]):Action => ({
    type: "ADD_MOVIES",
    payload: movies
});

export const removeMovies = ():Action => ({
    type: "REMOVE_MOVIES",
    payload: []
});
