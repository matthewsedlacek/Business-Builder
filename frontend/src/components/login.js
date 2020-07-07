import React from 'react';

const Login = () => {

    const handleSubmit =event => {
        event.preventDefault();
        console.log('test');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>Enter Username</p>
                <input type='text'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login;