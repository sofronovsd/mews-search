export interface IMovie {
    id?: number,
    title: string,
    release_date: string,
    vote_average: number,
    overview: string,
}

export function searchMovies(searchString: string) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&query=${searchString}`)
        .then(res => res.json())
        .then(res => res.results)
        .catch(console.log)
}
