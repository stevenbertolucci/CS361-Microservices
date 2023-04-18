import React from 'react';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';

function Help() {
    return (
        <div>
        <body className='App-body'>
            <Navigation />
            <h2>Questions with our Web App?</h2>
            <p className='App-p'>Please refer to this page to guide you when using Santa Claus Logistics Web App.</p>
        </body>
        <body>
            <FAQ />
        </body>
        </div>
    )
}

export default Help;