import React from 'react';
import {Link} from 'react-router-dom';
export default function Home() {
    return (
        <div className="navbar">
            <ul className="nav">
                <li className="nav-item">
                    <Link to='/Tarique_Ansari' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}
