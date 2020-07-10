import React from 'react';
import { Link } from 'react-router-dom'
import { Input } from '@material-ui/core';
import './david.css'

const Signup = (props) => {

    const handleSubmit = event => {
        event.preventDefault();

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
                <p><Input name='username' placeholder='email / username' type='text'/></p>
                {/* <p>Enter First Name:</p> */}
                <p><Input name='first_name' placeholder='first name' type='text' /></p>
                {/* <p>Enter Last Name:</p> */}
                <p><Input name='last_name' placeholder='last name' type='text' /></p>
                {/* <p>Enter Zip Code:</p> */}
                <p><Input name='zip' placeholder='zip code' type='text' /></p>
                <p><Input type='submit' value='Sign Up' /></p>
            </form>
            <p>Already registered? Log in <Link className="" to="/login">here</Link></p>
        </div>
    )
}

export default Signup;