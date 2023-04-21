import React from 'react';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';

function Help() {
    return (
        <div>
        <body className='App-body'>
            <h2 className='App-center'>Questions with our Web App?</h2>
            <Navigation />
            <p className='App-p'>Please refer to this page to guide you when using The Directory Web App.</p>
        </body>
        <body>
            <FAQ />
        </body>
        </div>
    )
}

export default Help;