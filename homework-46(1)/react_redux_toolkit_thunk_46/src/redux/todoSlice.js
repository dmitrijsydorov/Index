import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosFromServer } from "../api/todosAdapter.js";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async (userId) => {
        const todos = await getTodosFromServer(userId);
        return todos;
    },
);

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.unshift(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload);
            todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        completeAllTodos: (state) => {
            state.items = state.items.map((item) => {
                item.completed = true;
                return item;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { addTodo, toggleTodo, deleteTodo, completeAllTodos } =
    todoSlice.actions;
export default todoSlice.reducer;