import dotenv from 'dotenv';
import '../styling/Weather.css';
import React, { useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';
import { Input, Spin } from 'antd';

const { Search } = Input;

dotenv.config({ debug: process.env.debug });

const Weather = () => {
    const [isCity, setIsCity] = useState('');
    const [headerTitle, setHeaderTitle] = useState('');
    const [tempDay, setTempDay] = useState('');
    const [tempNight, setTempNight] = useState('');
    const [isRenderTempSentence, setIsRenderTempSentence] = useState(false);
    const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    Geocode.setApiKey(google_api_key);

    const handleClick = async () => {
        setLoadingSpinner(true);
        await Geocode.fromAddress(isCity)
            .then((response) => {
                const lat = response.results[0].geometry.location.lat;
                const long = response.results[0].geometry.location.lng;
                setTimeout(() => {
                    axios
                        .get(
                            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,minutely{part}&appid=${weather_api_key}`
                        )
                        .then((answer) => {
                            Geocode.fromLatLng(lat, long).then(
                                (response) => {
                                    setLoadingSpinner(false);
                                    const addressData =
                                        response.results[0].address_components;

                                    const city = addressData.filter((value) => {
                                        if (
                                            value.types[0] === 'locality' ||
                                            value.types[0] ===
                                                'administrative_area_level_2'
                                        ) {
                                            return value;
                                        }
                                    });
                                    const state = addressData.filter(
                                        (value) => {
                                            if (
                                                value.types[0] ===
                                                'administrative_area_level_1'
                                            ) {
                                                return value;
                                            }
                                        }
                                    );

                                    const loc =
                                        city[0].short_name +
                                        ', ' +
                                        state[0].short_name;
                                    setHeaderTitle(loc);
                                },
                                (error) => {
                                    setLoadingSpinner(false);
                                    alert('Input Not Valid');
                                    console.log(error);
                                }
                            );

                            setTempDay(answer.data.daily[0].temp.max);
                            setTempNight(answer.data.daily[0].temp.night);
                            setIsRenderTempSentence(true);
                        });
                }, 1000);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderTempSentence = () => {
        return (
            <div>
                The max temperature in {headerTitle} for today is {tempDay} and
                tonight it will be {tempNight}
            </div>
        );
    };
    return (
        <div className="weather-wrapper">
            <h1>Weather</h1>
            <Spin
                style={{ color: 'whitesmoke' }}
                tip="Loading..."
                size="large"
                spinning={loadingSpinner}
            ></Spin>
            <h1>{headerTitle}</h1>
            <div className="tempSentence-wrapper">
                {isRenderTempSentence ? renderTempSentence() : null}
            </div>

            <div className="btn-wrapper">
                <Search
                    placeholder="input search text"
                    onSearch={handleClick}
                    onChange={(e) => {
                        setIsCity(e.target.value);
                    }}
                    enterButton
                    style={{ width: 200 }}
                />
            </div>
        </div>
    );
};

export default Weather;
