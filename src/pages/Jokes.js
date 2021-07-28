import React, { useState } from 'react';
import { Input, Select, Button, Collapse, Spin } from 'antd';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

function Jokes() {
    document.title = 'TDofMT | Jokes';
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', 'Choose a category and get a joke!');
    const [jokes, setjokes] = useState('');
    const [jokeType, setJokeType] = useState('Any');
    const [loading, setLoading] = useState(true);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [jokeBoxOpen, setjokeBoxOpen] = useState('2');

    function handleChange(value) {
        setJokeType(value);
        console.log(jokeType);
        console.log(`selected ${value}`);
    }

    function getJoke() {
        setLoadingSpinner(true);
        setjokeBoxOpen('2');
        setTimeout(
            () =>
                axios
                    .get(`https://v2.jokeapi.dev/joke/${jokeType}`)
                    .then((res) => {
                        setjokes(res.data);
                        console.log(res);
                        if (loading === true) {
                            setLoading(false);
                        }
                        setLoadingSpinner(false);
                    })
                    .catch(console.error),
            1000
        );
    }

    if (loading === true) {
        return (
            <div className="content">
                <Helmet>
                    <meta property="og:title" content="Jokes | TDofMT" />
                    <meta
                        property="og:description"
                        content=" Choose a category and get a joke!"
                    />
                </Helmet>
                <h1>Jokes</h1>

                <div>
                    <Select
                        defaultValue="Any"
                        style={{ width: 200 }}
                        onChange={handleChange}
                    >
                        <Option value="Misc">Misc</Option>
                        <Option value="Programming">Programming</Option>
                        <Option value="Dark">Dark</Option>
                        <Option value="Pun">Pun</Option>
                        <Option value="Spooky">Spooky</Option>
                        <Option value="Christmas">Christmas</Option>
                    </Select>
                    <div>
                        <Button type="primary" onClick={getJoke}>
                            Make me laugh
                        </Button>
                    </div>
                    <Spin
                        style={{ color: 'whitesmoke' }}
                        tip="Loading..."
                        size="large"
                        spinning={loadingSpinner}
                    ></Spin>
                </div>
            </div>
        );
    }

    if (jokes.type === 'twopart') {
        return (

            <div>
                <h1>Jokes</h1>

                <div>
                    <Select
                        defaultValue="Any"
                        style={{ width: 200 }}
                        onChange={handleChange}
                    >
                        <Option value="Misc">Misc</Option>
                        <Option value="Programming">Programming</Option>
                        <Option value="Dark">Dark</Option>
                        <Option value="Pun">Pun</Option>
                        <Option value="Spooky">Spooky</Option>
                        <Option value="Christmas">Christmas</Option>
                    </Select>
                    <div>
                        <Button type="primary" onClick={getJoke}>
                            Make me laugh
                        </Button>
                    </div>
                </div>
                <Spin
                    style={{ color: 'whitesmoke' }}
                    tip="Loading..."
                    size="large"
                    spinning={loadingSpinner}
                >
                    <div>
                        <h2>{jokes.setup}</h2>
                        <Collapse
                            accordion={true}
                            onChange={(value) => {
                                setjokeBoxOpen(value);
                            }}
                            activeKey={[jokeBoxOpen]}
                            style={{ width: 200 }}
                        >
                            <Panel key="1" header="OMG tell me!">
                                <p>{jokes.delivery}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Spin>
            </div>
        );
    }
    if (jokes.type === 'single') {
        return (
            <div>
                <h1>Jokes</h1>

                <div>
                    <Select
                        defaultValue="Any"
                        style={{ width: 200 }}
                        onChange={handleChange}
                    >
                        <Option value="Misc">Misc</Option>
                        <Option value="Programming">Programming</Option>
                        <Option value="Dark">Dark</Option>
                        <Option value="Pun">Pun</Option>
                        <Option value="Spooky">Spooky</Option>
                        <Option value="Christmas">Christmas</Option>
                    </Select>
                    <div>
                        <Button type="primary" onClick={getJoke}>
                            Make me laugh
                        </Button>
                    </div>
                </div>
                <Spin
                    style={{ color: 'whitesmoke' }}
                    tip="Loading..."
                    size="large"
                    spinning={loadingSpinner}
                >
                    <div>
                        <h2>{jokes.joke}</h2>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default Jokes;
