import React from 'react';
import Navigation from '../components/Navigation';
import ShippingTextBox from '../components/ShippingTextBox';

function ShippingCost() {
    return (
        <div>
        <body className='App-body'>
            <h2>Shipping Cost</h2>
            <Navigation />
            <br />
        </body>
        <br />
        <body className="App-body2">
            <p className='App-p'>Type in the Zip Code of the City you want to ship to.</p>
            <ShippingTextBox />
        </body>
        </div>
    )
}

export default ShippingCost;