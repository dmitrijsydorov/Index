
import WeatherChecker from "./components/WeatherChecker";

import PostChecker from "./components/PostChecker";
function App() {
    return (
        <>
            <h1>Check your weather</h1>
            <WeatherChecker />
            <hr />
            <br />
            <h1>Check your post</h1>

            <PostChecker />
        </>
    );
}

export default App;