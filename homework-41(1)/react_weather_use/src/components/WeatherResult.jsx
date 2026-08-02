import CheckWeather from "./CheckWeather";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function WeatherResult({ cityName }) {
    const fetchWeatherPromise = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`,
    ).then(async (response) => {
        if (!response.ok) {
            throw new Error("Запит не вдався: ");
        }
        return response.json();
    });

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Suspense fallback={<p>Loading weather...</p>}>
                <CheckWeather fetchWeatherPromise={fetchWeatherPromise} />
            </Suspense>
        </ErrorBoundary>
    );
}