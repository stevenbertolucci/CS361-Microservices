import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapContainer = () => {
    const [ currentPosition, setCurrentPosition ] = useState({});

    const success = position => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
      };
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
      })

  
  const mapStyles = {        
    height: "30vh",
    width: "100%"};
  
  
  return (
     <LoadScript
       googleMapsApiKey='API-KEY'>
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
  )
}

export default MapContainer;