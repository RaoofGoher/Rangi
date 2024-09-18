import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaWrench, FaTools } from 'react-icons/fa';



const LoginNavbar = () => {
  return (
    <div className='border border-4 border-entjGolden rounded-lg p-4   flex justify-between bg-entjGreen'>
     <Link to='/'> <h1 className='font-bold text-2xl text-entjGolden px-3 flex items-center '>Rangi <FaTools/> </h1> </Link>
      <div className='flex space-x-4'>
           <NavLink to='/login/customer' className={({ isActive }) => `p-2 ${isActive ? 'border-2 border-white font-bold text-white' : 'text-entjGolden font-bold'}`}>Customer</NavLink>
           <NavLink to='/login/professional'className={({ isActive }) => `p-2 ${isActive ? 'border-2 border-white font-bold text-white' : 'text-entjGolden font-bold  '} `}>Profesional</NavLink>
      </div>
    </div>
  )
}

export default LoginNavbar
