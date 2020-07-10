import React from 'react';
import { Link } from 'react-router-dom'
import { Input } from '@material-ui/core';


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
                {/* <p>Enter Email Address</p> */}
                <div><Input name='username' placeholder='email / username' type='text'/></div>
                {/* <p>Enter First Name:</p> */}
                <div><Input name='first_name' placeholder='first name' type='text' /></div>
                {/* <p>Enter Last Name:</p> */}
                <div><Input name='last_name' placeholder='last name' type='text' /></div>
                {/* <p>Enter Zip Code:</p> */}
                <div><Input name='zip' placeholder='zip code' type='text' /></div>
                <div><Input type='submit' value='Sign Up' /></div>
            </form>
            Already registered? Log in <Link className="" to="/login">here</Link>
        </div>
    )
}

export default Signup;