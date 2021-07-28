import React from 'react';

const Home = () => {
    document.title = 'TDofMT | Home';
    return (
        <div className="content">
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
