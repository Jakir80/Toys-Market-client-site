/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUthContext } from '../AuthProvider/AuthProvider';

const PrivateRout = ({children}) => {
 const {user,loading}=useContext(AUthContext)
   const location=useLocation()
   if(loading){
    return <progress className="progress progress-info w-56" value="10" max="100"></progress>
   }
   if(user?.email){
    return children;
   }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRout;