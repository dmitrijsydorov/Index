import { useState } from "react";
import SettingsContext from "../contexts/SettingContext.jsx";
import { getUserFromServer } from "../api/UserAdapter.js";

const MainProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("uk");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const toggleLanguage = () =>
        setLanguage((prev) => (prev === "uk" ? "en" : "uk"));

    const findUser = async (userId) => {
        if (!userId) return;
        try {
            const data = await getUserFromServer(userId);
            setUsers([data]);
            setError(false);
        } catch {
            setError(true);
        }
    };

    return (
        <SettingsContext.Provider
            value={{
                theme,
                toggleTheme,
                language,
                toggleLanguage,
                users,
                setUsers,
                error,
                setError,
                findUser,
            }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default MainProvider;