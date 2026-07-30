import "./App.css";
import TaskDay from "./components/TaskDay";

const data = [
    {
        day: "Monday",
        description: "What needs to be done?",
        tasks: ["Buy milk", "Do homework", "Whine to the lecturer"],
    },
    {
        day: "Tuesday",
        description: "Where am I going today?",
        tasks: ["To work", "For training"],
    },
    {
        day: "Wednesday",
        description: "So, what should we do today?",
        tasks: ["Get a good night's sleep", "Eat", "To do some work", "Dancing", "Beer with a friend"],
    },
    {
        day: "Thursday",
        description: "Today is a day off!",
        tasks: ["To play", "Write some code", "Read more"],
    },
];
function App() {
    return (
        <>
            <div className="container">
                {data.map((dataObject) => (
                    <TaskDay dayObject={dataObject} key={dataObject.day} />
                ))}
            </div>
        </>
    );
}

export default App;