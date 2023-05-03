import React from 'react';
import Navigation from '../components/Navigation';
import LogOutButton from '../components/LogOutButton';

function HomePage() {
    return (
        <body>
            <h2 className='App-center'>Welcome to the Directory!</h2>
            <Navigation />
            <LogOutButton />
            <br />
        </body>
    )
}

export default HomePage;