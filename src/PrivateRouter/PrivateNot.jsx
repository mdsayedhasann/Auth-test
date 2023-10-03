import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateNot = ({children}) => {
    const {user} = useContext(AuthContext)
    if(!user){
        children
    }
    return <Navigate to='/'></Navigate>
};

export default PrivateNot;