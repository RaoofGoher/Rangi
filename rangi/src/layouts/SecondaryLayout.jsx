import React from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'

const SecondaryLayout = () => {
  return (
    <div className='secondary-background'>
       <div className="main-layout">
      <LoginNavbar />
      <div className="content">
        <Outlet />
      </div>
      
      <ToastContainer />
      <Footer />
    </div>
    </div>
  )
}

export default SecondaryLayout
