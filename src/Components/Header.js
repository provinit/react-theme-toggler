import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    return(
        <header>
            <h1 style={{ textAlign: "center"}}>Theme toggler</h1>
            <ThemeToggler/>
        </header>
    )
}

export default Header;