import React from 'react'
import { useHistory } from 'react-router';


const Home = (props) => {
    const history = useHistory()
    

    const handleLogout = event => {
        event.preventDefault()
        props.logout()
        history.push(
            {pathname:  "/login"}
            )
            console.log("logout button pressed")
    }

    return (
        <div>
            Home Page Stub
            {/* {console.log(props.currentUser.attributes.username)} */}
            <button onClick={(event) => handleLogout(event)}>Logout</button>
        </div>
    )
}

export default Home;