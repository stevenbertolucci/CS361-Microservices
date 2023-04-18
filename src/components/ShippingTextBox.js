import React from 'react';

function TextBox() {
    return (
        <div>
            <form>
                <label className='App-label' for ="tracking">Zip Code: </label>
                <input className='App-input' type="text" id = "zipcode" name="zipcode"></input>
                <input className='App-submit' type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default TextBox;