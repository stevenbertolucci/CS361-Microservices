import React from 'react';
import Navigation from '../components/Navigation';
import ZipCodeTextBox from '../components/ZipCodeTextBox';
import MapContainer from '../components/MapContainer';

function zipcodeInfo() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <body className='App-body'>
            <h2 className='App-center'>Zip Code Locator</h2>
            <Navigation />
            <br />
        </body>
        <br />
        <body className="App-body3">
            <p className='App-p'>Type in the <span className="App-red">Zip Code</span> of a U.S. city you want to look up.</p>
            <ZipCodeTextBox />
        </body>
        <body>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            <MapContainer />
        </body>
        </div>
    )
}

export default zipcodeInfo;