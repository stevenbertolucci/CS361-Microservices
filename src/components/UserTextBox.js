import React, {useState} from 'react';

function TextBox() {
    const [userName, setUserName] = useState('');
    const [updateUserName, setUpdate] = useState(userName)

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    const handleClick = (event) => {
        setUpdate(userName);
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = JSON.stringify(updateUserName)
        //alert("The city is: " + JSON.stringify(mycity));
        event.preventDefault();
    };

    return (
        <div>
            <form>
                <label className='App-label' for ="userName">User Name: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={userName}
                    onChange={handleChange}>
                </input>
                <button className='App-submit' type = 'submit' onClick={handleClick}>Submit</button>
            </form>
            <table className='App-table' id = "myTable">
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>{JSON.stringify(updateUserName)}</td>
                </tr>
            </table>
            </div>
    
    );
}

export default TextBox;