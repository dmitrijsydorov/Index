import Todo from "./Todo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, completeAllTodos } from "../redux/todoSlice";
import "./TodoList.css";

export default function TodoList() {
    const [userId, setUserId] = useState("");
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const { items, loading, error } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!newTodoTitle) return;
        dispatch(
            addTodo({
                userId: Number(userId),
                id: Date.now(),
                title: newTodoTitle,
                completed: false,
            }),
        );
        setNewTodoTitle("");
    };

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter" && userId) {
            dispatch(fetchTodos(userId));
        }
    };

    const handleClick = () => {
        if (!userId) return;
        dispatch(fetchTodos(userId));
    };

    const clickCompleteAllTodos = () => {
        dispatch(completeAllTodos());
    };

    return (
        <div>
            <div className='inputContainer'>
                <input
                    className='size'
                    type='number'
                    value={userId}
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                    placeholder='Введіть ID користувача'
                />
                <button className='size' onClick={handleClick}>
                    Choose user ID
                </button>

                {items.length > 0 && (
                    <div className='inputContainer'>
                        <input
                            className='size'
                            type='text'
                            placeholder='What are you gonna do?'
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        />
                        <button className='size' onClick={handleAdd}>
                            Add Task
                        </button>
                    </div>
                )}
            </div>

            {loading && <p>Downloading...</p>}
            {error && <p>{error}</p>}

            <ul>
                {items.map((item) => (
                    <Todo key={item.id} todo={item} />
                ))}
            </ul>
            <button className='size' onClick={clickCompleteAllTodos}>
                Complete All
            </button>
        </div>
    );
}