import React, { useState } from "react";

export default function WeatherChecker() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const getWeather = async (cityName) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`,
            );
            const data = await response.json();

            if (Number(data.cod) === 200) {
                setWeather(data);
                setError("");
            } else if (data.cod === "404") {
                setError("City not found");
                setWeather(null);
            } else {
                setError("Something went wrong");
                setWeather(null);
            }
        } catch {
            setError("Network error");
            setWeather(null);
        }
    };

    return (
        <div>
            <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city'
            />
            <button onClick={() => getWeather(city)}>Check the weather</button>
            {error && <p>{error}</p>}

            {weather && (
                <div>
                    <p>City: {weather.name}</p>
                    <p>Temp: {weather.main.temp} °C</p>
                    <p>Pressure: {weather.main.pressure} hPa</p>
                    <p>Description: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>
                        Wind: {weather.wind.speed} m/s, deg {weather.wind.deg}°
                    </p>
                    <img
                        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                        alt='weather icon'
                    />
                </div>
            )}
        </div>
    );
}