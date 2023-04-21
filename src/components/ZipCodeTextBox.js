import React, {useState} from 'react';

function TextBox() {
    const [zipcode, setZipcode] = useState('');
    const [updateZipcode, setUpdate] = useState(zipcode)
    const cities = require('cities');

    const handleChange = (event) => {
        setZipcode(event.target.value);
    };

    const handleClick = (event) => {
        if (zipcode === "") {
            alert("Zip Code must be filled out");
            return false;
        }
        let mycity = cities.zip_lookup(`${zipcode}`)

        if (mycity === undefined) {
            alert("Zip Code does not exist. Please input a valid zipcode. Thank you for understanding.")
            event.preventDefault()
            return false;
        }
        setUpdate(mycity);
        //alert("The city is: " + JSON.stringify(mycity));
        event.preventDefault();
    };

    return (
        <div>
            <form name="myForm">
                <label className='App-label' for ="zipcode">Zip Code: </label>
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
            <br />
            Longitudinal: {JSON.stringify(updateZipcode.longitude)}
            <br />
            Latitudinal: {JSON.stringify(updateZipcode.latitude)}
            </p>
            </div>
    
    );
}

export default TextBox;