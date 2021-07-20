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
    const [isRenderData, setIsRenderData] = useState(false);

    const google_books_api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const { Meta } = Card;

    const handleClick = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=+intitle:${isBook}&key=${google_books_api_key}`
            )
            .then((res) => {
                // console.log(res.data.items);
                setIsData(res.data.items);
                setIsRenderData(true);
                // for (var i = 0; i < res.data.items.length; i++) {
                //     console.log(res.data.items[i].volumeInfo.title);
                // }
            });
    };

    // const renderCards = () => {
    //     return (
    //         <Card
    //             style={{ width: 300 }}
    //             cover={
    //                 <img
    //                     alt="example"
    //                     src={element.volumeInfo.imageLinks.thumbnail}
    //                 />
    //             }
    //         >
    //             <Meta
    //                 avatar={
    //                     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    //                 }
    //                 title="Card title"
    //                 description="This is the description"
    //             />
    //         </Card>
    //     );
    // };

    const renderDataCards = (data) => {
        console.log(data);
        return (
            <Card
                className="card-data"
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={data.volumeInfo.imageLinks.thumbnail}
                    />
                }
            >
                <Meta
                    avatar={
                        <Avatar
                            src={data.volumeInfo.imageLinks.smallThumbnail}
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
                />
            </div>
            <div className="bookdata-wrapper">
                <Row>{isData.map(renderDataCards)}</Row>
            </div>
        </div>
    );
}

export default Books;
