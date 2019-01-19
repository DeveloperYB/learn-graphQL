import fetch from 'node-fetch';
const API_URL = 'https://yts.am/api/v2/list_movies.json';

//?limit=50&sort_by=download_count&minimum_rating=9
export const getMovies = (limit, rating, sorting) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `?limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    if (sorting) {
        REQUEST_URL += `&sort_by=${sorting}`;
    }
    return fetch(`${REQUEST_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
};
