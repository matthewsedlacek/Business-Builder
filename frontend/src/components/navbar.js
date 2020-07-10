import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './david.css'
const logo = require ('./doubleb.png');

const logout = () => {
    localStorage.removeItem('currentUser')
  }

const Question = (props) => {

    return (
        <div>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Link className="" to="/home"><Button><img src={logo} alt="double b logo" width="20" height="20" /></Button></Link>
                <Link className="" to="/businessquestions"><Button>Business Questions</Button></Link>
                <Link className="" to="/createbusiness"><Button>Create Business</Button></Link>
                <Link className="" to="/profile"><Button>User Profile</Button></Link>
                { !localStorage.currentUser? <Link className="" to="/login"><Button>Log In</Button></Link> :
                <Link className="" to="/login" onClick={logout}><Button>Log Out</Button></Link> }
            </ButtonGroup>
      </div>
    );
};

export default Question;