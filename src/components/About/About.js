import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const About = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>{user?.email}</h1>
            <h1>{user?.displayName}</h1>
            <img src={user?.photoURL} alt="/"></img>
        </div>
    );
};

export default About;