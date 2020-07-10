import React from 'react';
import { Link } from 'react-router-dom'

const Home = (props) => {

    return (
        <div>
            <p>Welcome {props.currentUser.attributes.first_name}</p>
            {/* {props.currentUser.attributes.business.name} */}
      </div>
    );
};

export default Home;