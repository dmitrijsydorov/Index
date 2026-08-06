import axios from "axios";

export async function getTodosFromServer(userId) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
    );

    return response.data;
}