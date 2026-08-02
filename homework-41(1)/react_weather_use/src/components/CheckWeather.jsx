import { use } from "react";

export default function WeatherChecker({ fetchWeatherPromise }) {
    const weather = use(fetchWeatherPromise);

    return (
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
    );
}