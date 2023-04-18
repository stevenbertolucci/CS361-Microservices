import React, {useState} from 'react';

function TextBox() {
    const [trackingNumber, setTrackingInfo] = useState('');

    return (
            <form>
                <label className='App-label' for ="tracking">Tracking Number: </label>
                <input className='App-input' type="text" value={trackingNumber} onChange={e => setTrackingInfo(e.target.value)} 
                        id = "tracking" name="tracking"></input>
                <button className='App-submit' onClick={e => {
                    setTrackingInfo(e.target.value);
                    alert(`Here is the tracking number you put in: ${trackingNumber}`);
                    e.preventDefault();
                }}>Submit</button>
            </form>
    )
}

export default TextBox;