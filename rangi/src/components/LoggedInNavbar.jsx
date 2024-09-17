import React from 'react'
import { useAuth } from './AuthContext';
import {Link} from 'react-router-dom';

const LoggedInNavbar = () => {
 
    const { authenticated, isCustomer, userName } =useAuth()

    console.log(isCustomer)


  return (
    <div className={`flex justify-between border border-2 bg-${ isCustomer ==='yes' ? 'customer-color' : 'pro-color' } rounded-lg items-center p-4`}>
     <h1 className='text-white text-3xl'>Hello {userName}</h1>
     <div className='flex justify-between space-x-4 p-4 '>
      <Link to = {`/dashboard/${userName}/home`}><h3 className='text-white text-1xl border border-2 p-1'>Home</h3></Link>
      <h3 className='text-white text-1xl'>orders</h3>
      <h3 className='text-white text-1xl'>requests</h3>
      <h3 className='text-white text-1xl'>claims</h3> 
     </div>
    </div>
  )
}

export default LoggedInNavbar
