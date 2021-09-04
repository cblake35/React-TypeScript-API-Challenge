import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

type WeatherProps = {
    lat: number,
    long: number,
}

const Weather = (props: WeatherProps) => {
    const [weather, setWeather] = useState<any>({})

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data)
            })
    },[props.long, props.lat])

    return (
        <div className='app'>
            {props.lat && props.long
                ?
                <div>
                    <h2>Location: {weather.name}</h2>
                    <h2>Temperature: {Math.round(((weather.main.temp - 273.15) * 1.8 + 32) * 100) / 100}ºF</h2>
                    <h2>Feels Like: {Math.round(((weather.main.feels_like - 273.15) * 1.8 + 32) * 100) / 100}ºF</h2>
                    <h2>Humidity: {weather.main.humidity}</h2>
                    <h2>Description: {weather.weather[0].description}</h2>
                </div>
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

        </div>
    )
}

export default Weather;