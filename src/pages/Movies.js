import React, { useState, useEffect } from 'react';
import { Input, Card, Pagination, Row, Image, Spin, notification } from 'antd';
import axios from 'axios';

const { Meta } = Card;
const { Search } = Input;

const movieAPI = process.env.REACT_APP_MOVIES_API;

function Movies() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieSearch, setMovieSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        getMovies();
    }, [page]);

    function pageReset() {
        if (page !== 1) {
            setPage(1);
        } else {
            getMovies();
        }
    }

    function openNotification(msg) {
        notification.open({
            message: `Failed to search: ${msg}`,
        });
    }

    function getMovies() {
        if (movieSearch !== '') {
            setLoadingSpinner(true);
            setTimeout(
                () =>
                    axios
                        .get(
                            `https://www.omdbapi.com/?s=${movieSearch}&apikey=${movieAPI}&plot&page=${page}`
                        )
                        .then((res) => {
                            if (res.data.Response === 'False') {
                                setLoadingSpinner(false);
                                console.log(res.data);
                                return openNotification(res.data.Error);
                            }
                            setLoadingSpinner(false);
                            console.log(res.data);
                            setMovieList(res.data.Search);
                            setTotalResults(res.data.totalResults);

                            setLoading(false);
                        })
                        .catch((err) => {
                            console.log(err);
                        }),
                1000
            );
        }
    }
    // console.log(movieList);

    const renderMovies = (movie) => {
        return (
            <div>
                <Card
                    className="movie-card"
                    hoverable
                    style={{ width: 240, padding: 10 }}
                    cover={
                        <Image
                            height={330}
                            width={220}
                            placeholder
                            alt={movie.Title}
                            src={movie.Poster}
                        />
                    }
                >
                    <Meta title={movie.Title} description={movie.Type} />
                    <p>{`Year Released: ${movie.Year}`}</p>
                </Card>
            </div>
        );
    };

    if (loading === true) {
        return (
            <div>
                <h1>Movies</h1>
                <div>
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
                <br />
                <Spin size="large" spinning={loadingSpinner}></Spin>
            </div>
        );
    }

    return (
        <div className="content">
            <h1>Movies</h1>

            <div>
                <Search
                    placeholder="Enter a movie name"
                    onChange={(e) => {
                        setMovieSearch(e.target.value);
                        console.log(movieSearch);
                    }}
                    onSearch={pageReset}
                    enterButton
                    style={{ width: 200 }}
                />
                <br />
            </div>
            <Spin size="large" spinning={loadingSpinner}>
                <Row>{movieList.map(renderMovies)}</Row>
                <Pagination
                    total
                    simple
                    size="small"
                    defaultCurrent={1}
                    current={page}
                    onChange={(value) => {
                        setPage(value);
                    }}
                    total={totalResults}
                />
            </Spin>
        </div>
    );
}

export default Movies;
