import React, { useContext, useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../JSFUNCTION/useTitle';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';
const Login = () => {
  useTitle("Login")
    const {user,signin}=useContext(AUthContext)
    const location=useLocation()
    const [error,setError]=useState("")
    const [succeess,setSuccess]=useState("")
    const from=location.state?.from?.pathname ||'/';
    const navigate=useNavigate()
    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signin(email,password)
        .then(result=>{
            console.log(result)
            const user=result.user
            console.log(user)
            setSuccess("use login successfully")
            form.reset()
          // console.log(loggeduser)
            navigate(from,{replace:true})
     
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }
    const {googleSignIn}=useContext(AUthContext)
    const signinbyGoogle=()=>{
        
        googleSignIn()
    }
    return (
        <div className="flex items-center justify-center sm:p-4  bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 sm:p-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Login</h2>
        <p>{error}</p>
        <p>{succeess}</p>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            
            className="w-full py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
         
          <h2>New to this website ? Please <button  >
          <button className='btn btn-link'><Link to="/registration">Register</Link></button>
          </button></h2>
        </form>
        
         sign in with Google
          <button className='w-full py-2 text-center px-4 bg-gray-500 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out' onClick={signinbyGoogle}> <FaGooglePlusG className='w-8 h-8'  > </FaGooglePlusG></button>
        
      </div>
    </div>
    );
};

export default Login;