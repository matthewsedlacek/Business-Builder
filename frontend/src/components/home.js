import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        currentUser: {
            attributes: {
                first_name: ""
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
            <div>
                <p>Welcome {this.state.currentUser.attributes.first_name}</p>
                {/* {props.currentUser.attributes.business.name} */}
          </div>
        );
    }
};

export default Home;