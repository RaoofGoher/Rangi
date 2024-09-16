import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const LoginNavbar = () => {
  return (
    <div className='border border-2 border-customer-color rounded-lg p-4 flex justify-between bg-gray-200'>
     <Link to='/'> <h1 className='font-bold text-2xl text-customer-color'>Rangi</h1> </Link>
      <div className='flex space-x-4'>
           <NavLink to='/login/customer' className={({ isActive }) => `p-2 ${isActive ? 'border-2 border-red-500 font-bold' : 'text-gray-600'}`}>Customer</NavLink>
           <NavLink to='/login/professional'className={({ isActive }) => `p-2 ${isActive ? 'border-2 border-red-500 font-bold' : 'text-gray-600'}`}>Profesional</NavLink>
      </div>
    </div>
  )
}

export default LoginNavbar
