import React from 'react';



const Signup = (props) => {

    const handleSubmit = event => {
        event.preventDefault();

        console.log(event.target.username.value)
        console.log(event.target.first_name.value)
        console.log(event.target.last_name.value)
        console.log(event.target.zip.value)

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': event.target.username.value,
                'first_name': event.target.first_name.value,
                'last_name': event.target.last_name.value,
                'zip': event.target.zip.value
            })
        }

        fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => alert(error.message))
    }
    
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Create New User</h1>
                <p>Enter Email Address</p>
                <input name='username' type='text'/>
                <p>Enter First Name:</p>
                <input name='first_name' type='text' />
                <p>Enter Last Name:</p>
                <input name='last_name' type='text' />
                <p>Enter Zip Code:</p>
                <input name='zip' type='text' />
                <input type='submit' />
            </form>
            <button onClick={props.handleTestingButton}>Testing</button>
        </div>
    )
}

export default Signup;