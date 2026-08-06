import { ActionType } from "./types.js";

const initialState = {
    theme: "light",
    language: "uk"
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };

        case ActionType.TOGGLE_LANG:
            return {
                ...state,
                language: state.language === "uk" ? "en" : "uk",
            };
        default:
            return state;
    }
};