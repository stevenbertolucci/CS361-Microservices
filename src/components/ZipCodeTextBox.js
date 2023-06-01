import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

function TextBox() {
    const [zipcode, setZipcode] = useState('');
    const [updateZipcode, setUpdate] = useState(zipcode)
    const [time, setTime] = useState('');
    const [currentPosition, setCurrentPosition ] = useState({});
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
        const currentPosition = {
            lat: parseFloat(`${mycity.latitude}`),
            lng: parseFloat(`${mycity.longitude}`)
          }
          console.log(currentPosition)
          setCurrentPosition(currentPosition);
        };
        
        useEffect(() => {
          navigator.geolocation.getCurrentPosition(handleClick);
        })
  
    
    const mapStyles = {        
      height: "50vh",
      width: "100%"};

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
            <p className='App-maps'>
            <LoadScript
                googleMapsApiKey='AIzaSyBBxr-L1UfxO8HYXKNvf0LHEQMwZO95_7U'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={currentPosition}>
                {
                    currentPosition.lat &&
                    (
                        <Marker position={currentPosition}></Marker>
                    )
                }
                </GoogleMap>
            </LoadScript>
            </p>
            </div>
    );
}

export default TextBox;