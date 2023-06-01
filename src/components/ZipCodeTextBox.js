import React, {useState} from 'react';

function TextBox() {
    const [zipcode, setZipcode] = useState('');
    const [updateZipcode, setUpdate] = useState(zipcode)
    const [time, setTime] = useState('');
    const cities = require('cities');

    const handleChange = (event) => {
        setZipcode(event.target.value);
    };

    const handleClick = async (event) => {
        event.preventDefault();
        if (zipcode === "") {
            alert("Zip Code must be filled out");
            return false;
        }

        let mycity = cities.zip_lookup(`${zipcode}`)
        console.log(mycity)

        if (mycity === undefined) {
            alert("Zip Code does not exist. Please input a valid zip code. Thank you for understanding.")
            return false;
        }
        setUpdate(mycity);
        console.log(mycity.latitude)
        console.log(mycity.longitude)

        const URL = 'http://localhost:5243/timezone?latitude=' + `${mycity.latitude}` + '&longitude=' + `${mycity.longitude}`
        event.preventDefault()
        const result = await fetch(URL)
        const data = await result.json();
        setTime(data);
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
            <p className='App-p2'>
            City: {JSON.stringify(updateZipcode.city)}
            <br />
            State: {JSON.stringify(updateZipcode.state)}
            <br />
            Longitudinal: {JSON.stringify(updateZipcode.longitude)}
            <br />
            Latitudinal: {JSON.stringify(updateZipcode.latitude)}
            <br />
            Current Time: {JSON.stringify(time.time)} 
            <br />
            TimeZone: {JSON.stringify(time.timeZone)}
            </p>
            </div>
    );
}

export default TextBox;