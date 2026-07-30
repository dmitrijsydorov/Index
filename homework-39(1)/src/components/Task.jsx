import { useState } from "react";
import "./Task.css";

export default function TaskStatus({ task }) {
    const [isDone, setIsDone] = useState(false);

    function handleToggle() {
        setIsDone(!isDone);
    }
    return (
        <li className={isDone ? "list done" : "list to-do"} onClick={handleToggle}>
            {task}
        </li>
    );
}