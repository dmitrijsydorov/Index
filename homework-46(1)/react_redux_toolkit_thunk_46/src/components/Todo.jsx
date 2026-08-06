import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";
import { MdOutlineDoneAll, MdRemoveDone } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import "./Todo.css";

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    const handleToggleClick = () => {
        dispatch(toggleTodo(todo.id));
    };
    const handleDeleteClick = () => {
        dispatch(deleteTodo(todo.id));
    };
    return (
        <li className={`todoItem ${todo.completed ? "done" : ""}`}>
            <span className='title'>{todo.title}</span>

            <div className='buttons'>
                <button
                    className={`btn ${todo.completed ? "btnUndone" : "btnDone"}`}
                    onClick={handleToggleClick}>
                    {todo.completed ? (
                        <MdRemoveDone />
                    ) : (
                        <MdOutlineDoneAll title='Done' />
                    )}
                </button>

                <button className='btn btnDelete' onClick={handleDeleteClick}>
                    <TiDelete title='Delete' />
                </button>
            </div>
        </li>
    );
}