import React, {useState} from 'react';

function TextBox() {
    const [userInfo, setUserInfo] = useState('');

    return (
            <form>
                <label className='App-label' for ="tracking">User Name: </label>
                <input className='App-input' type="text" value={userInfo} onChange={e => setUserInfo(e.target.value)} 
                        id = "tracking" name="tracking"></input>
                <button className='App-submit' onClick={e => {
                    setUserInfo(e.target.value);
                    alert(`Here is the username you typed: ${userInfo}`);
                    e.preventDefault();
                }}>Submit</button>
            </form>
    )
}

export default TextBox;