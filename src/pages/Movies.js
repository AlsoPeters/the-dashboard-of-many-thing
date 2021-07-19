import React, { useState, useEffect } from 'react';
// import { Input, Space, Card } from 'antd';
import axios from 'axios';

function Movies() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://www.omdbapi.com/?apikey=a37a0fb5&s=star_wars')
            .then((res) => {
                setMovieList(res.data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);
    console.log(movieList);

    if (loading === true) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1>Movies</h1>
            <img
                src={movieList.Search[0].Poster}
                alt={movieList.Search[0].Title}
            ></img>
            <h2>{movieList.Search[0].Title}</h2>
            <h3>{movieList.Search[0].Year}</h3>
        </div>
    );
}

export default Movies;
