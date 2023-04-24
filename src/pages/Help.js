import React from 'react';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';

function Help() {
    return (
        <div>
        <body>
            <h2 className='App-center'>Questions with our Web App?</h2>
            <Navigation />
            <p className='App-p'>Please refer to this page to guide you when using The Directory Web App.</p>
        </body>
        <br />
        <body className='App-body4'>
            <img src= "/images/Home Page Help.jpg" alt = "Home Page Help Screen to show how to use Home Page."></img>
        </body>
        <br />
        <body className='App-body4'>
            <img src= "/images/User Log Book Help.jpg" alt = "User Log Book Help Screen to show how to use User Log Book Tab."></img>
        </body>
        <br />
        <body className='App-body4'>
            <img src= "/images/Zip Code Locator Help.jpg" alt = "Zip Code Locator Help Screen to show how to use Zip Code Locator Tab."></img>
        </body>
        <br />
            <FAQ />
        <br />
        </div>
    )
}

export default Help;