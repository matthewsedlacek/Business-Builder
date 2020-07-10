import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./style.css"

class Home extends Component {

    state = {
        currentUser: {
            attributes: {
                first_name: "",
                last_name: "",
                zip: null,
                business:{
                    id: null,
                    name: ""
                }
            }
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: JSON.parse(localStorage.getItem('currentUser'))
        })
    }

    render() {
        return (
            <div className="userDiv">
                <h1>User Profile</h1>
                <p>Name: {this.state.currentUser.attributes.first_name} {this.state.currentUser.attributes.last_name}</p>
                <p>Email: {this.state.currentUser.attributes.username}</p>
                {this.state.currentUser.attributes.business ? <p>Business Name: {this.state.currentUser.attributes.business.name}</p> : null}
                <p>Zip Code: {this.state.currentUser.attributes.zip}</p>
            </div>
        );
    }
};

export default Home;