import React from 'react';
import { Link } from 'react-router-dom'

const Question = (props) => {

    return (
        <div>
            <ul>
                <Link className="" to="/login">Log In</Link>
                <Link className="" to="/businessquestions">Business Questions</Link>
            </ul>
      </div>
    );
};

export default Question;