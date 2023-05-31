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
    const [randomFirstName, setrandomFirst] = useState();
    const [randomLastName, setrandomLast] = useState();
    const [randomaddress, setrandomAddressNumber] = useState();
    const [randomaddress2, setrandomAddressName] = useState();
    const [randomcity, setrandomCity] = useState();
    const [randomZipcode, setrandomZipcode] = useState();


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
        if (a === "" || b === "" || c === "" || d === "" || e ==="") {
            alert("Entire form must be filled out");
            event.preventDefault();
            return false;
        }
        event.preventDefault();
        const x = document.createElement('tr');
        const x1 = document.createElement('tr');
        const x2 = document.createElement('tr');
        const x3 = document.createElement('tr');
        const x4 = document.createElement('tr');
        x.textContent = `${firstName}`;
        x1.textContent = `${lastName}`;
        x2.textContent = `${address}`;
        x3.textContent = `${city}`;
        x4.textContent = `${zipcode}`;
        const theData = document.getElementById('data1');
        const theData1 = document.getElementById('data2');
        const theData2 = document.getElementById('data3');
        const theData3 = document.getElementById('data4');
        const theData4 = document.getElementById('data5');
        theData.appendChild(x);
        theData1.appendChild(x1);
        theData2.appendChild(x2);
        theData3.appendChild(x3);
        theData4.appendChild(x4);

        setUpdateFirst(firstName);
        setUpdateLast(lastName);
        setUpdateAddress(address);
        setUpdateCity(city);
        setUpdateZipcode(zipcode);
        event.preventDefault();
    };


    // Call microservice without clicking button
    const handleZip = async (event) => {
        
        const URL = 'http://localhost:4500/zipcode'
        event.preventDefault();
        const result = await fetch(URL)
        const data = await result.json();
        console.log(data);
    }

    // Call microservice without clicking button
    const handleRandom = async (event) => {
        
        const URL = 'http://localhost:3001/random-person'
        event.preventDefault();
        const result = await fetch(URL)
        const data = await result.json();
        console.log(data.results[0].name.first);
        console.log(data.results[0].name.last);
        console.log(data.results[0].location.street.number);
        console.log(data.results[0].location.street.name);
        console.log(data.results[0].location.city);
        console.log(data.results[0].location.postcode);
        const p = document.createElement('tr');
        const p1 = document.createElement('tr');
        const p2 = document.createElement('tr');
        const p3 = document.createElement('tr');
        const p4 = document.createElement('tr');
        p.textContent = `${data.results[0].name.first}`;
        p1.textContent = `${data.results[0].name.last}`;
        p2.textContent = `${data.results[0].location.street.number}` + ` ${data.results[0].location.street.name}`;
        p3.textContent = `${data.results[0].location.city}`;
        p4.textContent = `${data.results[0].location.postcode}`;

        const xhrdata = document.getElementById('data1');
        const xhrdata1 = document.getElementById('data2');
        const xhrdata2 = document.getElementById('data3');
        const xhrdata3 = document.getElementById('data4');
        const xhrdata4 = document.getElementById('data5');
        xhrdata.appendChild(p);
        xhrdata1.appendChild(p1);
        xhrdata2.appendChild(p2);
        xhrdata3.appendChild(p3);
        xhrdata4.appendChild(p4);

        setrandomFirst(data.results[0].name.first)
        setrandomLast(data.results[0].name.last)
        setrandomAddressNumber(data.results[0].location.street.number)
        setrandomAddressName(data.results[0].location.street.name)
        setrandomCity(data.results[0].location.city)
        setrandomZipcode(data.results[0].location.postcode)
    }

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
                <p className='App-p4'>OR</p>
                <button className='App-submit2' type = 'submit' onClick={handleZip}>Get Zip Code</button>
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
                <tr id = "data"></tr>
                    <td id = "data1"></td>
                    <td id = "data2"></td>
                    <td id = "data3"></td>
                    <td id = "data4"></td>
                    <td id = "data5"></td>
            </table>
            </div>
    );
}

export default TextBox;