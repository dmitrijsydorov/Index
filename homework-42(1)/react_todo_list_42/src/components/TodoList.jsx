import { useState } from "react";
import { getTodosFromServer } from "../api/todosAdapter.js";
import styles from "./TodoList.module.css";
import Todo from "./Todo";

export default function TodoList() {
    const [userId, setUserId] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };
    const toggleTodo = (id) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        );
    };
    const addTodo = () => {
        if (newTodoTitle === "") {
            return;
        }
        const newTodoItem = {
            userId: Number(userId) || 1, // Прив'язуємо до поточного юзера
            id: Date.now(), // Створюємо унікальний ID для React (key)
            title: newTodoTitle,
            completed: false,
        };

        setTodos([newTodoItem, ...todos]);

        setNewTodoTitle("");
    };

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            fetchTodos();
        }
    };

    const handleClick = () => {
        fetchTodos();
    };

    async function fetchTodos() {
        if (!userId) {
            setError("Please enter a User ID");
            return;
        }
        setLoading(true);
        setError("");

        try {
            const data = await getTodosFromServer(userId);
            setTodos(data);
        } catch (error) {
            setError(`Error: ${error.code} ${error.message}`);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className={styles.inputContainer}>
                <input
                    className={styles.size}
                    type='number'
                    value={userId}
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                    placeholder='Введіть ID користувача'
                />

                <button className={styles.size} onClick={handleClick}>
                    Choose user ID
                </button>

                {todos.length > 0 && (
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.size}
                            type='text'
                            placeholder='What are you gonna do?'
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTodo()}
                        />
                        <button className={styles.size} onClick={addTodo}>
                            Add Task
                        </button>
                    </div>
                )}
            </div>

            {loading && <p>Downloading...</p>}
            {error && <p>{error}</p>}

            <ul>
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onDelete={deleteTodo}
                        onToggle={toggleTodo}
                    />
                ))}
            </ul>
        </div>
    );
}