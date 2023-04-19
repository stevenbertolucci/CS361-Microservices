import React, {useState} from 'react';

function TextBox() {
    const [zipcode, setZipcode] = useState('');
    const [updateZipcode, setUpdate] = useState(zipcode)
    const cities = require('cities');

    const handleChange = (event) => {
        setZipcode(event.target.value);
    };

    const handleClick = (event) => {
        let mycity = cities.zip_lookup(`${zipcode}`)
        setUpdate(mycity);
        //alert("The city is: " + JSON.stringify(mycity));
        event.preventDefault();
    };

    return (
        <div>
            <form>
                <label className='App-label' for ="tracking">Zip Code: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={zipcode}
                    onChange={handleChange}>
                </input>
                <button className='App-submit' type = 'submit' onClick={handleClick}>Submit</button>
            </form>
            <p> Zipcode: {JSON.stringify(updateZipcode.zipcode)}
            <br />
            City: {JSON.stringify(updateZipcode.city)}
            <br />
            State: {JSON.stringify(updateZipcode.state)}
            </p>
            </div>
    
    );
}

export default TextBox;