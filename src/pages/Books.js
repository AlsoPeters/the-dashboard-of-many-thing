import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { Input } from 'antd';
dotenv.config();

const { Search } = Input;
function Books() {
    const [isBook, setIsBook] = useState('');

    const handleClick = () => {};
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
