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

    const displayData = (data) => {
        const personfname = firstName;
        console.log(personfname);
        const personlname = lastName;
        console.log(personlname);
        const personAddress = address;
        console.log(personAddress);
        const personCity = city;
        console.log(personCity);
        const personZip = zipcode;
        console.log(personZip);
        const div = document.createElement("div");
        div.textContent = `${personfname} ${personlname} ${personAddress} 
                            ${personCity} ${personZip}`;
        document.getElementById("myTable").appendChild(div);
    }

    const displayRandom = (data) => {
        const randomfname = randomFirstName;
        console.log(randomfname);
        const randomlname = randomLastName;
        console.log(randomlname);
        const randomAddress = randomaddress;
        console.log(randomAddress);
        const randomAddress2 = randomaddress2;
        console.log(randomAddress);
        const randomCity = randomcity;
        console.log(randomCity);
        const randomZip = randomZipcode;
        console.log(randomZip);
        const div = document.createElement("table");
        div.textContent = `${randomfname} ${randomlname} ${randomAddress} ${randomAddress2}
                            ${randomCity} ${randomZip}`;
        document.getElementById("myTable").appendChild(div);
    }

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
        setUpdateFirst(firstName);
        setUpdateLast(lastName);
        setUpdateAddress(address);
        setUpdateCity(city);
        setUpdateZipcode(zipcode);
        displayData();
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
        setrandomFirst(data.results[0].name.first)
        setrandomLast(data.results[0].name.last)
        setrandomAddressNumber(data.results[0].location.street.number)
        setrandomAddressName(data.results[0].location.street.name)
        setrandomCity(data.results[0].location.city)
        setrandomZipcode(data.results[0].location.postcode)
        // Display the response from random-person
        displayRandom();
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
                <button className='App-submit2' type = 'submit' onClick={handleRandom}>Generate a Random User</button>
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
            </table>
            </div>
    );
}

export default TextBox;