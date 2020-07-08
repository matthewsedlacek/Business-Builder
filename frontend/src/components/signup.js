import React from 'react';




const Signup = (props) => {
    
    const handleSubmit = event => {
        event.preventDefault();
        props.login(event.target.username.value)
        console.log(event.target)
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Create New User</h1>
                <p>Enter Email Address</p>
                <input name='email' type='text'></input>
                <p>Enter Zip Code:</p>
                <input name='zipcode' type='text'></input>
                <input type='submit'></input>
            </form>
            <button onClick={props.handleTestingButton}>Testing</button>
        </div>
    )
}

export default Signup;