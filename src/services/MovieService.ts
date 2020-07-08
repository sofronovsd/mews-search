export interface IMovie {
    id: number,
    title: string,
    release_date: string,
    vote_average: number,
    overview: string,
    poster_path?: string
}

export function searchMovies(searchString: string) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&query=${searchString}`)
        .then(res => res.json())
        .then(res => res.results)
        .catch(console.log)
}

export function getMovieDetails(id: number) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03b8572954325680265531140190fd2a`)
        .then(res => res.json())
        .catch(console.log)
}
