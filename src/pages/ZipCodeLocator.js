import React from 'react';
import Navigation from '../components/Navigation';
import ZipCodeTextBox from '../components/ZipCodeTextBox';

function zipcodeInfo() {
    return (
        <div>
        <body className='App-body'>
            <h2>Zip Code Locator</h2>
            <Navigation />
            <br />
        </body>
        <br />
        <body className="App-body2">
            <p className='App-p'>Type in the zip Code of a U.S. city you want to look up.</p>
            <ZipCodeTextBox />
        </body>
        </div>
    )
}

export default zipcodeInfo;