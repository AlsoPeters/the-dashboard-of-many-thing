import React, { useState, useEffect } from 'react';
import { Input, Space, Card } from 'antd';
import axios from 'axios';

const { Meta } = Card;
const { Search } = Input;

function Movies() {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieData, setMovieData] = useState([]);

    const omdbAPI = 'a37a0fb5';

    const onSearch = (event) => {
        setMovieTitle(event);
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(
                `http://www.omdbapi.com/?apikey=${omdbAPI}&s=starwars`
            );
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    // console.log(movieTitle);
    return (
        <div>
            <div>
                <h1>Movies</h1>
                <Search
                    placeholder="input movie name"
                    onSearch={onSearch}
                    // onChange=
                    enterButton
                />
            </div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <Meta title={movieTitle} description="www.instagram.com" />
            </Card>
        </div>
    );
}

export default Movies;
