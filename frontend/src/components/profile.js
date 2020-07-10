import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import './david.css'


const Profile = (props) => {
    const history = useHistory()

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {props.currentUser.attributes.first_name} {props.currentUser.attributes.last_name}</p>
            <p>Email: {props.currentUser.attributes.username}</p>
            <p>Business Name: {props.currentUser.attributes.business.name}</p>
            <p>Zip Code: {props.currentUser.attributes.zip}</p>
        </div>
    )
}

export default Profile;