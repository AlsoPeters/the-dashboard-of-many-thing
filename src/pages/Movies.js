import React, { useState } from 'react';
import { Input, Space, Card } from 'antd';
import axios from 'axios';

const { Meta } = Card;
const { Search } = Input;

const movieAPI = process.env.REACT_APP_MOVIES_API;

function Movies() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieSearch, setMovieSearch] = useState('');

    function getMovies() {
        // console.log('asah');
        axios
            .get(
                `http://www.omdbapi.com/?t=${movieSearch}&apikey=${movieAPI}&plot`
            )
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
                <Search
                    placeholder="Enter a movie name"
                    onChange={(e) => {
                        setMovieSearch(e.target.value);
                        // console.log(movieSearch);
                    }}
                    onSearch={getMovies}
                    enterButton
                    style={{ width: 200 }}
                />
            </div>
        );
    }
    return (
        <div>
            <h1>Movies</h1>
            <div>
                <Search
                    className="movie-input"
                    placeholder="Enter a movie name"
                    onChange={(e) => {
                        setMovieSearch(e.target.value);
                        console.log(movieSearch);
                    }}
                    onSearch={getMovies}
                    // style={{ width: 200 }}
                />
            </div>
            <Card
                className="movie-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt={movieList.Title} src={movieList.Poster} />}
            >
                <Meta title={movieList.Title} description={movieList.Plot} />
                <p>{`IMDB Rating: ${movieList.imdbRating}`}</p>
                <p>{`Metascore: ${movieList.Metascore}`}</p>
            </Card>
        </div>
    );
}

export default Movies;
