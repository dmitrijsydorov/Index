import React, { useState } from "react";

export default function PostChecker() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [post, setPost] = useState(null);

    const getSearch = async (num) => {
        if (isNaN(num)) {
            setError("Enter a number");
            setPost(null);
            return;
        } else if (num < 1 || num > 100) {
            setError("Enter a number from 1 to 100");
            setPost(null);
            return;
        }

        setError("");
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${num}`,
            );
            const data = await response.json();
            setPost(data);
        } catch {
            setError("Error fetching post");
        }
    };
    const handleSearch = () => {
        const num = parseInt(inputValue);
        getSearch(num);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Enter post number'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
}