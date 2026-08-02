import { useState } from "react";
import WeatherResult from "./WeatherResult";

export default function CityInput() {
    const [cityInput, setCityInput] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    return (
        <div>
            <input
                type='text'
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder='Enter city'
            />
            <button onClick={() => setSelectedCity(cityInput)}>Check weather</button>

            {selectedCity && <WeatherResult cityName={selectedCity} />}
        </div>
    );
}