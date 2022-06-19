import React from "react";
import headerStyles from '../assets/styles/Header.module.css';

function Header () {
    return (
        <header className={headerStyles.wrapper}>
            <h1 className={headerStyles.title}>Ты сегодня покормил кота?</h1>
        </header>
    )
}

export default Header