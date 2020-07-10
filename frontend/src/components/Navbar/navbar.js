import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const logout = () => {
    localStorage.removeItem('currentUser')
  }

  class NavBar extends Component {

    logout = () => {
        this.props.logoutfn()
    }

    render() {
        return (
            <div className='navbar'>
                <ul>
                    {this.props.currentUser ? <Link className="navbutton" to="/home">Home</Link> : null}
                    {this.props.currentUser ? !this.props.currentUser.attributes.business ? <Link className="navbutton" to="/createbusiness">Create Business</Link> : <Link className="navbutton" to="/businessquestions">Business Questions</Link> : null}
                    {this.props.currentUser ? <Link className="navbutton" to="/login" onClick={() => this.logout()}>Log Out</Link> : <Link className="navbutton" to="/login">Log In</Link> }
                </ul>
            </div>
        );
    }
};

export default NavBar;