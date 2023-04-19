import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className='App-nav a'>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/zip-code-locator">Zip Code Locator</Link>
            <Link to="/help">Help</Link>
        </nav>
    )
}

export default Navigation;