import React from 'react'
import { useHistory } from 'react-router';


const Home = (props) => {
    const history = useHistory()
    let user = JSON.parse(localStorage.getItem('currentUser'))

    const handleLogout = event => {
        event.preventDefault()
        props.logout()
        history.push(
            {pathname:  "/"}
         )
    }

    return (
        <div>
            Home Page Stub
            {console.log(user.attributes.username)}
            <button onClick={(event) => handleLogout(event)}>Logout</button>
        </div>
    )
}

export default Home;