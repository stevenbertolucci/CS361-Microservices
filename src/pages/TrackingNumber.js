import React from 'react';
import Navigation from '../components/Navigation';
import TrackingTextBox from '../components/TrackingTextBox';

function TrackingNumber() {
    return (
        <body className='App-body'>
            <h2>Tracking Number</h2>
            <p className='App-p'>Please use the text field to look up tracking number: </p>
            <TrackingTextBox />
            <Navigation />
        </body>
    ) 
    
}

export default TrackingNumber;