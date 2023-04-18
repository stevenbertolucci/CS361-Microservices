import React from 'react';
import Navigation from '../components/Navigation';

function HomePage() {
    return (
        <body className='App-body'>
            <h2>Welcome to Santa Claus Logistics!</h2>
            <p className='App-p'>To get started, click on an option on the left side of this screen.</p>
            <Navigation />
        </body>
    )
}

export default HomePage;