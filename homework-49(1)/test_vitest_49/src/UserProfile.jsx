import { useState, useEffect } from "react";
import { getUserFromServer } from "../src/api/getUserFromServerAdapter.js";

const UserProfile = () => {
    const [userId, setUserId] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currentId) return;

        const loadUser = async () => {
            try {
                setLoading(true);
                setError(null);
                setUser(null);

                const data = await getUserFromServer(currentId);
                setUser(data);
            } catch {
                setError("User not found or an error occurred");
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [currentId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId.trim()) {
            setCurrentId(userId);
        }
    };

    return (
        <div className='user-container'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                    type='number'
                    className='search-input'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder='Enter ID'
                    min='1'
                />
                <button type='submit' className='search-button'>
                    Search
                </button>
            </form>

            <div>
                {loading && <div>Loading...</div>}
                {error && <div >{error}</div>}
            </div>

            {user && !loading && (
                <div>
                    <h2>{user.name}</h2>
                    <div>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address?.city}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;