import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className='App-nav a'>
            <Link to="/">Home</Link>
            <Link to="/tracking-number">Tracking Number</Link>
            <Link to="/shipping-cost">Shipping Cost</Link>
            <Link to="/help">Help</Link>
        </nav>
    )
}

export default Navigation;