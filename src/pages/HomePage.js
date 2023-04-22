import React from 'react';
import Navigation from '../components/Navigation';
import MapContainer from '../components/MapContainer';

function HomePage() {
    return (
        <body>
            <h2 className='App-center'>Welcome to the Directory!</h2>
            <Navigation />
            <br />
        </body>
    )
}

export default HomePage;