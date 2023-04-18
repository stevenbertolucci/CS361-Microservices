import React from 'react';
import Navigation from '../components/Navigation';
import TrackingTextBox from '../components/TrackingTextBox';

function TrackingNumber() {
    return (
        <div>
        <body className='App-body'>
            <h2>Tracking Number</h2>
            <Navigation />
            <br />
        </body>
        <br />
        <body className='App-body2'>
            <p className='App-p'>Please use the text field to look up tracking number: </p>
            <TrackingTextBox />
        </body>
        </div>
    ) 
    
}

export default TrackingNumber;