import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    document.title = 'TDofMT | Home';
    return (
        <div className="content">
            <Helmet>
                <meta property="og:title" content="Home | TDofMT" />
                <meta
                    property="og:description"
                    content="The dashboard of many things"
                />
            </Helmet>
            <h1>Home</h1>

            <br></br>
            <br></br>
            <p>
                <b>
                    <u>Weather:</u>
                </b>{' '}
                Returns the highest daily temp for the day and the temp for that
                night.
            </p>
            <br></br>
            <p>
                <b>
                    <u>Movies:</u>
                </b>{' '}
                Returns a list of movies with the production date and cover.
            </p>
            <br></br>
            <p>
                <b>
                    <u>Books:</u>
                </b>{' '}
                Returns a list of books with a book summary and a link to the
                website to buy it.
            </p>
            <br></br>
            <p>
                <b>
                    <u>Jokes:</u>
                </b>{' '}
                Choose a category and get a joke!
            </p>
        </div>
    );
};

export default Home;
