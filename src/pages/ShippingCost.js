import React from 'react';
import Navigation from '../components/Navigation';
import ShippingTextBox from '../components/ShippingTextBox';

function ShippingCost() {
    return (
        <body className='App-body'>
            <h2>Shipping Cost</h2>
            <p className='App-p'>Type in the Zip Code of the City you want to ship to.</p>
            <ShippingTextBox />
            <Navigation />
        </body>
    )
}

export default ShippingCost;