import React from 'react';
import { useHistory } from 'react-router';




const Login = (props) => {
    const history = useHistory()
    
    const handleSubmit = event => {
        event.preventDefault();
        props.login(event.target.username.value)
        history.push(
            {pathname:  "/"}
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