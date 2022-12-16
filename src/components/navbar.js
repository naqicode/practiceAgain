import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css'


const navbar = () => {
    return (
    
        <header>
            <h1 id="nav-title">About.Me</h1>
            <nav>
                <ul>
                    <li className="list">
                        <Link to='/'>Japan</Link>
                    </li>
                    <li>
                        <Link to='/korea'>Korea</Link>
                    </li>
                    <li>
                        <Link to='/newyork'>New York Xmas</Link>
                    </li>
                    <li>
                        <Link to='/madagascar'>Madagascar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default navbar;