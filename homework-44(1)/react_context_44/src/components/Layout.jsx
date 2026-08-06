import { useContext, useState } from "react";
import SettingsContext from "../contexts/SettingContext.jsx";

function Layout() {
    const {
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        users,
        error,
        findUser,
    } = useContext(SettingsContext);

    const [userId, setUserId] = useState("");

    const handleFindUser = () => {
        findUser(userId);
        setUserId("");
    };

    return (
        <div className={`main-container ${theme}`}>
            <header className="top-bar">
                <button onClick={toggleTheme} className={`button ${theme}`}>
                    {language === "uk" ? "Змінити тему" : "Change Theme"}
                </button>

                <button onClick={toggleLanguage} className={`button ${theme}`}>
                    {language === "uk" ? "Змінити мову" : "Change Language"}
                </button>
            </header>

            <main className="content">
                <div>
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="ID"
                    />
                    <button onClick={handleFindUser} className={`button ${theme}`}>
                        {language === "uk" ? "Знайти юзера" : "Find User"}
                    </button>
                </div>

                <ul className="user-list">
                    {users.map((user, index) => (
                        <li key={index}>{user.name}</li>
                    ))}
                </ul>
                {error && (
                    <p className="error-message">
                        {language === "uk" ? "Користувача не знайдено" : "User not found"}
                    </p>
                )}
            </main>
        </div>
    );
}

export default Layout;