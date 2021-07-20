import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { Input } from 'antd';
dotenv.config();

const { Search } = Input;
function Books() {
    const [isBook, setIsBook] = useState('');

    const google_books_api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const handleClick = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${isBook}+intitle:keyes&key=${google_books_api_key}`
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
                    style={{ width: 200 }}
                />
            </div>
        </div>
    );
}

export default Books;
