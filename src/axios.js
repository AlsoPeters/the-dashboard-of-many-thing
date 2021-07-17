import axios from 'axios';

const omdbAPI = 'a37a0fb5';

const instance = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${omdbAPI}&`,
});

export default instance;
