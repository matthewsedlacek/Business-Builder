import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import './style.css'


const Login = (props) => {
    const history = useHistory()
    
    // handleSubmit passes entered username to App.js login fxn to process and redirects to '/' 
    // where router logic renders home if login successful and to login if not successful
    const handleSubmit = event => {
        event.preventDefault();
        const result = props.login(event.target.username.value)
        
        if (result) {
            history.push(
                {pathname:  "/home"}
            )
        }
    }

    return (
        <div className="login">
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Log In</h1>
                {/* <p>Enter Username</p> */}
                <Input name='username' placeholder='username / email' type='text' />
                <Input type='submit' value="Log In" />
            </form>
            <div>Not registered yet? <Link className="" to="/signup">Sign up</Link></div>
            {/* <Button variant="contained" color="primary"> */}
      {/* Hello World */}
    {/* </Button> */}
        </div>
    )
}

export default Login;