import React from 'react';
import { useHistory } from 'react-router';




const Login = (props) => {
    const history = useHistory()
    
    // handleSubmit passes entered username to App.js login fxn to process and redirects to '/' 
    // where router logic renders home if login successful and to login if not successful
    const handleSubmit = event => {
        event.preventDefault();
        props.login(event.target.username.value)
        history.push(
            {pathname:  "/home"}
        )
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Login</h1>
                <p>Enter Username</p>
                <input name='username' type='text'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login;