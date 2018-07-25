import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            <Link to="/profile">Profile</Link>
            <Link to="serverStatus">Riot Servers</Link> 
        </div>
    )
}

export default NavBar;