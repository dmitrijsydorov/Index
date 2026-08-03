import styles from "./Todo.module.css";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdRemoveDone } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export default function Todo({ todo, onToggle, onDelete }) {
    const handleToggleClick = () => {
        onToggle(todo.id);
    };
    const handleDeleteClick = () => {
        onDelete(todo.id);
    };
    return (
        <li className={`${styles.todoItem} ${todo.completed ? styles.done : ""}`}>
            <span className={styles.title}>{todo.title}</span>

            <div className={styles.buttons}>
                <button
                    className={`${styles.btn} ${todo.completed ? styles.btnUndone : styles.btnDone}`}
                    onClick={handleToggleClick} >
                    {todo.completed ? (
                        <MdRemoveDone />
                    ) : (
                        <MdOutlineDoneAll title='Done' />
                    )}
                </button>

                <button
                    className={`${styles.btn} ${styles.btnDelete}`}
                    onClick={handleDeleteClick}>
                    <TiDelete title='Delete' />
                </button>
            </div>
        </li>
    );
}