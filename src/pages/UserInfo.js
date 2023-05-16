import React from 'react';
import Navigation from '../components/Navigation';
import UserTextBox from '../components/UserTextBox'

function UserInfo() {
    
    return (
        <body>
            <h2 className='App-center'>User Log Book</h2>
            <Navigation />
            <br />
            <p className='App-p'>Please use the text field to record your visitation: </p>
            <UserTextBox />
        </body>
    )
}

export default UserInfo;