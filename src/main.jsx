import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/Router'
import AuthProvider from './Components/Shared/AuthProvider/AuthProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl  mx-auto'>

   <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </div>
  </React.StrictMode>,
)
