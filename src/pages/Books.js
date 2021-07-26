import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { Input, Card, Avatar, Row } from 'antd';
import '../styling/Books.css';
dotenv.config();

const { Search } = Input;
function Books() {
    const [isBook, setIsBook] = useState('');
    const [isData, setIsData] = useState([]);

    const google_books_api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const { Meta } = Card;

    const handleClick = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=+intitle:${isBook}&key=${google_books_api_key}`
            )
            .then((res) => {
                setIsData(res.data.items);
            });
    };

    const renderDataCards = (data) => {
        const handleLink = () => {
            window.open(data.volumeInfo.infoLink);
        };

        return (
            <Card
                className="card-data grow"
                style={{ width: 300 }}
                cover={
                    <img
                        alt="No image to display"
                        src={
                            data?.volumeInfo?.imageLinks?.thumbnail ||
                            'no image'
                        }
                    />
                }
                onClick={handleLink}
            >
                <Meta
                    avatar={
                        <Avatar
                            alt="No image"
                            src={
                                data?.volumeInfo?.imageLinks?.smallThumbnail ||
                                'No image'
                            }
                        />
                    }
                    title={data.volumeInfo.title}
                    description={data.volumeInfo.description}
                />
            </Card>
        );
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
            <div className="bookdata-wrapper">
                <Row>{isData.map(renderDataCards)}</Row>
            </div>
        </div>
    );
}

export default Books;
