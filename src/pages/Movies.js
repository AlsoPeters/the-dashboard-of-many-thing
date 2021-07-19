import React, { useState, useEffect } from 'react';
import { Input, Space, Card } from 'antd';
import axios from 'axios';

const { Search } = Input;

function Movies() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieSearch, setMovieSearch] = useState('');

    function getMovies() {
        console.log('asah');
        axios
            .get(`http://www.omdbapi.com/?apikey=a37a0fb5&s=${movieSearch}`)
            .then((res) => {
                setMovieList(res.data);
                setLoading(false);
            })
            .catch(console.error);
    }
    console.log(movieList);

    if (loading === true) {
        return (
            <div>
                <h1>Movies</h1>
                <Space direction="vertical">
                    <Search
                        placeholder="Enter a movie name"
                        allowClear
                        onChange={(e) => {
                            setMovieSearch(e.target.value);
                            console.log(movieSearch);
                        }}
                        onSearch={getMovies}
                        style={{ width: 200 }}
                    />
                </Space>
            </div>
        );
    }
    return (
        <div>
            <h1>Movies</h1>
            <div>
                <Space direction="vertical">
                    <Search
                        placeholder="Enter a movie name"
                        allowClear
                        onChange={(e) => {
                            setMovieSearch(e.target.value);
                            console.log(movieSearch);
                        }}
                        onSearch={getMovies}
                        style={{ width: 200 }}
                    />
                </Space>
            </div>
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
