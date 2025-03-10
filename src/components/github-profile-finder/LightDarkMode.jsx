import React from "react";
import { useTheme } from "../../ThemeContext";

const LightDarkMode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default LightDarkMode;