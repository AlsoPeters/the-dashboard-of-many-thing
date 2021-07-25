import React, { useState } from 'react';
import { Input, Select, Button, Collapse } from 'antd';
import axios from 'axios';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

function Jokes() {
    const [jokes, setjokes] = useState('');
    const [jokeType, setJokeType] = useState('Any');
    const [loading, setLoading] = useState(true);

    function handleChange(value) {
        setJokeType(value);
        console.log(jokeType);
        console.log(`selected ${value}`);
    }

    function testClick() {
        console.log('I clicked the button');
    }

    function getJoke() {
        axios
            .get(`https://v2.jokeapi.dev/joke/${jokeType}`)
            .then((res) => {
                setjokes(res.data);
                if (loading === true) {
                    setLoading(false);
                }
            })
            .catch(console.error);
    }
    console.log(jokes);

    if (loading === true) {
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
            </div>
        );
    }
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
            <div>
                <h2>{jokes.setup}</h2>
                <Collapse defaultActiveKey={['1']} style={{ width: 200 }}>
                    <Panel header="OMG tell me!">
                        <p>{jokes.delivery}</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
}

export default Jokes;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Call() {
//     const [jokes, setjokes] = useState('')

//     useEffect(() => {
//         axios.get('https://official-joke-api.appspot.com/random_joke').then((res) => {
//           const joke = (res.data)
//           console.log(res)
//         setjokes(joke)
//         })

//     }, [])
//     console.log(jokes)
//     return (
//         <div>
//             <h1>This is from Call</h1>
//         <h2>{jokes.setup}</h2>
//         <h3>{jokes.punchline}</h3>
//         </div>
//     )
// }

// export default Call
