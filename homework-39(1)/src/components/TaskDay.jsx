import "./TaskDay.css";
import Task from "./Task";

export default function TaskDay({ dayObject }) {
    return (
        <div className="list-container">
            <h2>{dayObject.day}</h2>
            <p>{dayObject.description}</p>
            {dayObject.tasks.map((taskText) => (
                <Task task={taskText} key={taskText} />
            ))}
        </div>
    );
}