import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../JSFUNCTION/useTitle';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';

const Registration = () => {
      useTitle("Registration")
        const {createUser,updateUser}=useContext(AUthContext)
        const [error,setError]=useState('')
        const [succeess,setsuccess]=useState('')
        const handleRegistration=event=>{
            event.preventDefault()
            const form=event.target;
            const name=form.name.value;
            const email=form.email.value;
            const photo=form.photo.value;
            const password=form.password.value;
            console.log(email,password,name,photo)
            createUser(email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser)
                updateUser(loggedUser,name,photo)
                setsuccess('user created successfully')
                form.reset()
    
            })
            .catch(error=>{
                console.log(error.message)
                setError(error.message)
            })
        }
   
      return (
        <div className="flex items-center justify-center sm:p-4 p-4 bg-gray-100">
          <div className="bg-white shadow-md rounded-lg sm:p-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Registration</h2>
            <p>{error}</p>
            <p>{succeess}</p>
            <form onSubmit={handleRegistration}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 sm:p-4">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                  name='name'
                />
              </div>
              <div className="mb-6">
                <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
                <input
                  type="text"
                  id="photoUrl"
                  name='photo'
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the URL of your photo"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>

                <input
                  type="password"
                  name='password'
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Register
              </button>
              <h2>Already have an Account Please  <button className=' btn btn-link'  >
          <Link to="/login">Login</Link>
          </button></h2>
            </form>
          </div>
        </div>
      );
    }
    

export default Registration;