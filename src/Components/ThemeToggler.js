import React, {useContext, useState} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
        }}>

        {/* <span>{themeMode === "light" ? "Turn on Dark Mode" : "Turn on Light Mode"}</span> */}

        </div>
    )
}

export default ThemeToggler;