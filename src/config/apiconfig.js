import axios from 'axios';

const BEARER_TOKEN =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTRlM2JhYzRiY2QwNGIxZmQ3YjMwNWJjOGVhNjU5MCIsIm5iZiI6MTcyODMxNDM0NC41OTUsInN1YiI6IjY3MDNmYmU4NTA4ZGZhN2JhMzc5NjQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZHDJutCC-lCWwiBF6gUCLW4vOeIV1ZHS-a7SKyuBC8";
export const axiosApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
    },
});

