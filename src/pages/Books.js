import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { Input } from 'antd';
dotenv.config();

const { Search } = Input;
function Books() {
    const [isBook, setIsBook] = useState('');

    const nyTimes_Api_Token = process.env.REACT_APP_BOOKS_API_KEY;

    const handleClick = () => {
        axios
            .get(
                `https://api.nytimes.com/svc/books/v3/reviews.json?title=${isBook}&api-key=${nyTimes_Api_Token}`
            )
            .then((res) => {
                console.log(res);
            });
    };
    return (
        <div>
            <h1>Books</h1>
            <div className="search-wrapper">
                <Search
                    placeholder="input search text"
                    onSearch={handleClick}
                    onChange={(e) => {
                        setIsBook(e.target.value);
                    }}
                    enterButton
                />
            </div>
        </div>
    );
}

export default Books;
