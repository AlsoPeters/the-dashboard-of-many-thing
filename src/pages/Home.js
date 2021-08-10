import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
    CloudOutlined,
    VideoCameraOutlined,
    ReadOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import { Card, Col, Row, Avatar, List } from 'antd';
import { auto } from 'async';

const { Meta } = Card;
const cardStyle = { paddingTop: 16, fontSize: 100 };
const cardWrapper = {
    width: 240,
    textAlign: 'center',
    marginTop: 15,
};
const cardSpan = '4';
const xsSize = '24';
const mdSize = '6';

const Home = () => {
    return (
        <div className="content">
            <Helmet>
                <title>Home | TDofMT</title>
                <meta
                    name="description"
                    content="The dashboard of many things"
                />
                <meta property="og:title" content="Home | TDofMT" />
                <meta
                    property="og:description"
                    content="The dashboard of many things"
                />
            </Helmet>
            <h1>Home</h1>

            <br></br>
            <br></br>

            <div className="site-card-wrapper">
                <Row justify="space-around">
                    <Col xs={xsSize} md={mdSize}>
                        <Link to="/weather">
                            <Card
                                className="icon-card"
                                hoverable
                                style={cardWrapper}
                                cover={<CloudOutlined style={cardStyle} />}
                            >
                                <Meta
                                    title="Weather"
                                    description="Returns the highest daily temp for the day and the temp for that
                night."
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={xsSize} md={mdSize}>
                        <Link to="/movies">
                            <Card
                                className="icon-card"
                                hoverable
                                style={cardWrapper}
                                cover={
                                    <VideoCameraOutlined style={cardStyle} />
                                }
                            >
                                <Meta
                                    title="Movies"
                                    description="Returns a list of movies with the production date and cover."
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={xsSize} md={mdSize}>
                        <Link to="/books">
                            <Card
                                className="icon-card"
                                hoverable
                                style={cardWrapper}
                                cover={<ReadOutlined style={cardStyle} />}
                            >
                                <Meta
                                    title="Books"
                                    description="Returns a list of books with a book summary and a link to the
                website to buy it."
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={xsSize} md={mdSize}>
                        <Link to="/jokes">
                            <Card
                                className="icon-card"
                                hoverable
                                style={cardWrapper}
                                cover={<SmileOutlined style={cardStyle} />}
                            >
                                <Meta
                                    title="Jokes"
                                    description="Choose a category and get a joke!"
                                />
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;
