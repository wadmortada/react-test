import React from 'react';

import './Nav.css';

function Nav() {
    return (
        <nav className="navSec">
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Articles</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
        
    )
}

export default Nav;