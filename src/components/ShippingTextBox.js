import React, {useState} from 'react';

function TextBox() {
    const [zipcode, setZipcode] = useState('');

    return (
            <form>
                <label className='App-label' for ="tracking">Zip Code: </label>
                <input className='App-input' type="text" value={zipcode} onChange={e=> setZipcode(e.target.value)} 
                        id = "zipcode" name="zipcode"></input>
                <button className='App-submit' onClick={e => {
                    setZipcode(e.target.value);
                    alert(`The Zipcode you entered: ${zipcode}`);
                    e.preventDefault(); 
                }}>Submit</button>
            </form>
    )
}

export default TextBox;