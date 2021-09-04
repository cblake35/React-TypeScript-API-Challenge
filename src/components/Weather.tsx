import React, { useState, useEffect } from 'react';


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
                console.log(data)
            })
        
    }, [])





    return (
        <div className='app'>
           {weather ? <h1>Latitude: {weather.id}</h1> : <h1>{props.lat}</h1>} 
            <h1>Longitude: {props.long}</h1>
        </div>
    )
}

export default Weather;