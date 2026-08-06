import { createContext } from "react";

const SettingsContext = createContext({
    theme: "light",
    toggleTheme: () => {},
    language: "uk",
    toggleLanguage: () => {},
    users: [],
    setUsers: () => {},
});

export default SettingsContext;