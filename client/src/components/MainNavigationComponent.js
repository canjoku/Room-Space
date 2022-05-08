import React from 'react';
import {NavLink} from "react-router-dom";
import '../css/MainNavigation.css';

const MainNavigationComponent = props => {
    return (
        <header className='main-navigation'>
            <div className='main-navigation__logo'>
                <h1>Room-Space</h1>
            </div>
            <nav className='main-navigation__items'>
                <ul>
                    <li><NavLink to="/home">Rooms</NavLink></li>
                    <li><NavLink to="/auth">Authenticate</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigationComponent;