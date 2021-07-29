import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { Input, Card, Avatar, Row, Spin } from 'antd';
import '../styling/Books.css';
import { Helmet } from 'react-helmet';
dotenv.config();

const { Search } = Input;
function Books() {
    const [isBook, setIsBook] = useState('');
    const [isData, setIsData] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const google_books_api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const { Meta } = Card;

    const handleClick = () => {
        setLoadingSpinner(true);
        setTimeout(
            () =>
                axios
                    .get(
                        `https://www.googleapis.com/books/v1/volumes?q=+intitle:${isBook}&key=${google_books_api_key}`
                    )
                    .then((res) => {
                        setLoadingSpinner(false);
                        setIsData(res.data.items);
                    }),
            1000
        );
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
        <div className="content">
            <Helmet>
                <title>Books | TDofMT</title>
                <meta
                    name="description"
                    content="Returns a list of books with a book summary and a link to the
                    website to buy it."
                />
                <meta property="og:title" content="Books | TDofMT" />
                <meta
                    property="og:description"
                    content=" Returns a list of books with a book summary and a link to the
                website to buy it."
                />
            </Helmet>
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
            <Spin
                style={{ color: 'whitesmoke' }}
                tip="Loading..."
                size="large"
                spinning={loadingSpinner}
            >
                <div className="bookdata-wrapper">
                    <Row>{isData.map(renderDataCards)}</Row>
                </div>
            </Spin>
        </div>
    );
}

export default Books;
