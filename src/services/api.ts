import axios from 'axios';

export const key = 'cce1e8a1e5f1f06a1c4c37d3790c094c';

const apiSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false&query=`,
});

const apiPage = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false`,
});

// &page=1&query=

const apiMovieDetail = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export { apiSearch, apiMovieDetail, apiPage };
