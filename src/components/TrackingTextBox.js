import React from 'react';

function TextBox() {
    return (
        <div>
            <form>
                <label className='App-label' for ="tracking">Tracking Number: </label>
                <input className='App-input' type="text" id = "tracking" name="tracking"></input>
                <input className='App-submit' type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default TextBox;