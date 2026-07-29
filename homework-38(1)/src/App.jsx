import { useState } from "react";
import "./App.css";
import CustomInput from "./CustomInput.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section id="center">
                <button
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
            </section>

            <CustomInput type="text" placeholder="put your text here" label="Name" />
            <CustomInput
                type="password"
                placeholder="put your password here"
                label="Password"
            />
        </>
    );
}

export default App;