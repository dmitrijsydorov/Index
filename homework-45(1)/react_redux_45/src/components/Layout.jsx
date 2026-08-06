import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectLang } from "../redux/selectors.js";
import { toggleTheme, toggleLang } from "../redux/actions.js";
import "./Layout.css";

function Layout() {
    const theme = useSelector(selectTheme);
    const language = useSelector(selectLang);
    const dispatch = useDispatch();

    const handleThemeClick = () => {
        dispatch(toggleTheme());
    };
    const handleLangClick = () => {
        dispatch(toggleLang());
    };

    return (
        <div className={`main-container ${theme}`}>
            <header className='top-bar'>
                <button onClick={handleThemeClick} className={`button ${theme}`}>
                    {language === "uk" ? "Змінити тему" : "Change Theme"}
                </button>

                <button onClick={handleLangClick} className={`button ${theme}`}>
                    {language === "uk" ? "Змінити мову" : "Change Language"}
                </button>
            </header>
        </div>
    );
}

export default Layout;