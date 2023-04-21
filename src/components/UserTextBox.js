import React, {useState} from 'react';

function TextBox() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [updateFirstName, setUpdateFirst] = useState(firstName);
    const [updateLastName, setUpdateLast] = useState(lastName);
    const [updateAddress, setUpdateAddress] = useState(address);
    const [updateCity, setUpdateCity] = useState(city);
    const [updateZipcode, setUpdateZipcode] = useState(zipcode);


    const handleChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleChange1 = (event) => {
        setLastName(event.target.value);
    };

    const handleChange2 = (event) => {
        setAddress(event.target.value);
    };

    const handleChange3 = (event) => {
        setCity(event.target.value);
    };

    const handleChange4 = (event) => {
        setZipcode(event.target.value);
    };

    const handleClick = (event) => {
        let a = firstName;
        let b = lastName;
        let c = address;
        let d = city;
        let e = zipcode;
        if (a === "" || b === "" || c === "" || d=== "" || e==="") {
            alert("Entire form must be filled out");
            event.preventDefault();
            return false;
        }
        event.preventDefault();
        setUpdateFirst(firstName);
        setUpdateLast(lastName);
        setUpdateAddress(address);
        setUpdateCity(city);
        setUpdateZipcode(zipcode);
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(0);
        var cell4 = row.insertCell(0);
        var cell5 = row.insertCell(0);
        cell1.innerHTML = JSON.stringify(updateFirstName)
        cell2.innerHTML = JSON.stringify(updateLastName)
        cell3.innerHTML = JSON.stringify(updateAddress)
        cell4.innerHTML = JSON.stringify(updateCity)
        cell5.innerHTML = JSON.stringify(updateZipcode)
        //alert("The city is: " + JSON.stringify(mycity));
        event.preventDefault();
    };

    return (
        <div>
            <form>
                <label className='App-label' for ="firstName">First Name: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={firstName}
                    onChange={handleChange}>
                </input>
                <br />
                <label className='App-label' for ="lastName">Last Name: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={lastName}
                    onChange={handleChange1}>
                </input>
                <br />
                <label className='App-label' for ="address">Address: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={address}
                    onChange={handleChange2}>
                </input>
                <br />
                <label className='App-label' for ="city">City: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={city}
                    onChange={handleChange3}>
                </input>
                <br />
                <label className='App-label' for ="zipcode">Zip Code: </label>
                <input 
                    className='App-input' 
                    type="text" 
                    value={zipcode}
                    onChange={handleChange4}>
                </input>
                <br />
                <button className='App-submit' type = 'submit' onClick={handleClick}>Submit</button>
            </form>
            <br />
            
            <table className='App-table' id = "myTable">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zipcode</th>
                </tr>
                <tr>
                    <td>{JSON.stringify(firstName)}</td>
                    <td>{JSON.stringify(lastName)}</td>
                    <td>{JSON.stringify(address)}</td>
                    <td>{JSON.stringify(city)}</td>
                    <td>{JSON.stringify(zipcode)}</td>
                </tr>
            </table>
            </div>
    
    );
}

export default TextBox;