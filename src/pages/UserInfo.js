import React from 'react';
import Navigation from '../components/Navigation';
import UserTextBox from '../components/UserTextBox'

function UserInfo() {
    
    return (
        <div>
        <body className='App-body'>
            <h2 className='App-center'>User Log Book</h2>
            <Navigation />
            <br />
        </body>
        <br />
        <body className='App-body2'>
            <p className='App-p'>Please use the text field to log a user: </p>
        <UserTextBox />
        </body>
        </div>
    )
}

export default UserInfo;