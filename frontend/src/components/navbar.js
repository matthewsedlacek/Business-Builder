import React from 'react';
import { Link } from 'react-router-dom'

const Question = (props) => {

    return (
        <div>
            <ul>
                <Link className="" to="/home">Home</Link>
                <Link className="" to="/businessquestions">Business Questions</Link>
                <Link className="" to="/createbusiness">Create Business</Link>
                <Link className="" to="/login">Log In</Link>
            </ul>
      </div>
    );
};

export default Question;